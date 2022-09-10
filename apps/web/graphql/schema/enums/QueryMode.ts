import * as TypeGraphQL from "type-graphql-v2-fork";

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive",
}
TypeGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
