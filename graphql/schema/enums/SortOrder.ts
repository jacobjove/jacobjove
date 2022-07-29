import * as TypeGraphQL from "type-graphql-v2-fork";

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}
TypeGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});
