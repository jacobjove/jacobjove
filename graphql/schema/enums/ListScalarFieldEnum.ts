import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ListScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  name = "name",
  slug = "slug",
  description = "description",
  fields = "fields",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ListScalarFieldEnum, {
  name: "ListScalarFieldEnum",
  description: undefined,
});
