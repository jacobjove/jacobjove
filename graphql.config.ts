import * as dotenv from "dotenv";
import type { IGraphQLConfig } from "graphql-config";

dotenv.config();

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

const schema = `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`;

console.log(`Loading GraphQL schema from ${schema} ...`);

const config: IGraphQLConfig = {
  // schema: "graphql/schema.gql.json",
  schema,
};

console.log("Loaded GraphQL schema.");

export default config;
