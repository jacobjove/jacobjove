import * as TypeGraphQL from "type-graphql-v2-fork";

export enum TYPE {
  CHRON = "CHRON",
  INTERVAL = "INTERVAL",
}
TypeGraphQL.registerEnumType(TYPE, {
  name: "TYPE",
  description: undefined,
});
