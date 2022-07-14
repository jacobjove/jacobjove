import * as TypeGraphQL from "type-graphql";

export enum TYPE {
  CHRON = "CHRON",
  INTERVAL = "INTERVAL",
}
TypeGraphQL.registerEnumType(TYPE, {
  name: "TYPE",
  description: undefined,
});
