import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ItemScalarFieldEnum {
  id = "id",
  listId = "listId",
  data = "data",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ItemScalarFieldEnum, {
  name: "ItemScalarFieldEnum",
  description: undefined,
});
