/* eslint-disable import/order */
// organize-imports-ignore
// NOTE: Reflection must be imported at the top!
import "@abraham/reflection";

import { createGqlContext } from "@web/graphql/context";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { buildSchema, NonEmptyArray, MiddlewareFn } from "type-graphql-v2-fork";
import { Model } from "mongoose";
import { ApolloServer } from "apollo-server-micro";
import * as resolvers from "@web/graphql/schema/resolvers";
import { withSentry } from "@sentry/nextjs";
import cors from "micro-cors";
import { send } from "micro";

const IS_PROD = process.env.NODE_ENV === "production";
const IS_DEV = process.env.NODE_ENV === "development";

const USE_SENTRY_FOR_GRAPHQL = false;

const withCors = cors({
  allowCredentials: true,
  allowMethods: ["GET", "POST", "OPTIONS"],
  allowHeaders: [
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  origin: "https://studio.apollographql.com",
});

const MongooseMiddlware: MiddlewareFn = async (_, next) => {
  const result = await next();
  if (result instanceof Model) {
    return result.toObject();
  } else if (Array.isArray(result)) {
    return result.map((item) => (item instanceof Model ? item.toObject() : item));
  }
  return result;
};

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
        validate: false, // TODO: investigate
        globalMiddlewares: [MongooseMiddlware],
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
    send(res, 200, "OK");
    res.end();
    return false;
  }
  const apolloServerHandler = await apolloServerHandlerPromise;
  return withCors(apolloServerHandler)(req, res);
};

export default USE_SENTRY_FOR_GRAPHQL ? withSentry(handler) : handler;

export const config: PageConfig = {
  api: {
    // Delegate body parsing to Apollo Server Micro.
    bodyParser: false,
    // https://github.com/getsentry/sentry-javascript/issues/3852
    // https://nextjs.org/docs/api-routes/api-middlewares#custom-config
    ...(USE_SENTRY_FOR_GRAPHQL ? { externalResolver: true } : {}),
  },
};
