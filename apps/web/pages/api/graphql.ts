/* eslint-disable import/order */
// organize-imports-ignore
// NOTE: reflect-metadata must be imported at the top!
import "reflect-metadata";

import { createGqlContext } from "@web/graphql/context";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { buildSchema, MiddlewareFn, NonEmptyArray } from "type-graphql-v2-fork";
import { ApolloServer } from "apollo-server-micro";
import { Model, Document } from "mongoose";
import { getClassForDocument } from "@typegoose/typegoose";
import * as resolvers from "@web/graphql/generated/resolvers";
import { withSentry } from "@sentry/nextjs";
import cors from "micro-cors";

const IS_PROD = process.env.NODE_ENV === "production";
const IS_DEV = process.env.NODE_ENV === "development";

const withCors = cors({
  allowCredentials: true,
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: [
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
  ],
  origin: "https://studio.apollographql.com",
});

export const TypegooseMiddleware: MiddlewareFn = async (_, next) => {
  const result = await next();
  if (Array.isArray(result)) {
    return result.map((item) => (item instanceof Model ? convertDocument(item) : item));
  }
  if (result instanceof Model) {
    return convertDocument(result);
  }
  return result;
};

function convertDocument(doc: Document) {
  const convertedDocument = doc.toObject();
  const DocumentClass = getClassForDocument(doc)!;
  Object.setPrototypeOf(convertedDocument, DocumentClass.prototype);
  return convertedDocument;
}

declare const global: NodeJS.Global & {
  apolloServerHandler?: ReturnType<ApolloServer["createHandler"]>;
};

const getApolloServerHandler = async () => {
  if (!global.apolloServerHandler) {
    const apolloServer = new ApolloServer({
      context: createGqlContext,
      schema: await buildSchema({
        resolvers: Object.values(resolvers) as unknown as NonEmptyArray<CallableFunction>,
        emitSchemaFile: IS_DEV ? { path: `${process.env.BASE_DIR}/graphql/schema.gql` } : false,
        globalMiddlewares: [TypegooseMiddleware],
        validate: false, // TODO: investigate
      }),
      debug: !IS_PROD,
      introspection: IS_DEV,
      cache: "bounded",
    });
    await apolloServer.start();
    global.apolloServerHandler = apolloServer.createHandler({ path: "/api/graphql" });
  }
  return global.apolloServerHandler;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandlerPromise = getApolloServerHandler();
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  const apolloServerHandler = await apolloServerHandlerPromise;
  return withCors(apolloServerHandler)(req, res);
};

export default withSentry(handler);

export const config: PageConfig = {
  api: {
    // Delegate body parsing to Apollo Server Micro.
    bodyParser: false,
    // https://github.com/getsentry/sentry-javascript/issues/3852
    // https://nextjs.org/docs/api-routes/api-middlewares#custom-config
    externalResolver: true,
  },
};
