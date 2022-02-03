/* eslint-disable import/order */
// organize-imports-ignore
// NOTE: reflect-metadata must be imported at the top!
import "reflect-metadata";

import { createContext } from "@/graphql/context";
import { resolvers } from "@/graphql/schema";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { buildSchema } from "type-graphql";

declare const global: NodeJS.Global & {
  apolloServerHandler?: ReturnType<ApolloServer["createHandler"]>;
};

const getApolloServerHandler = async () => {
  if (!global.apolloServerHandler) {
    // TODO: https://prisma.typegraphql.com/docs/advanced/exposing-models
    const apolloServer = new ApolloServer({
      context: createContext,
      schema: await buildSchema({
        resolvers,
        dateScalarMode: "isoDate",
        emitSchemaFile: {
          path: `${process.env.BASE_DIR}/graphql/schema.gql`,
          commentDescriptions: true,
        },
        validate: false,
      }),
      debug: process.env.NODE_ENV !== "production",
    });
    await apolloServer.start();
    // console.log(">>> Started apollo server")
    global.apolloServerHandler = apolloServer.createHandler({ path: "/api/graphql" });
  }
  return global.apolloServerHandler;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  return (await getApolloServerHandler())(req, res);
};

export default handler;

export const config: PageConfig = {
  api: {
    // Delegate body parsing to Apollo Server Micro.
    bodyParser: false,
  },
};
