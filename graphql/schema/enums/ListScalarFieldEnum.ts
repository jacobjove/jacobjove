import * as TypeGraphQL from "type-graphql";

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
