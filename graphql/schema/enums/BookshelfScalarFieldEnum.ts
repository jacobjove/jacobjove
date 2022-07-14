import * as TypeGraphQL from "type-graphql";

export enum BookshelfScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  name = "name",
  slug = "slug",
  isPublic = "isPublic",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BookshelfScalarFieldEnum, {
  name: "BookshelfScalarFieldEnum",
  description: undefined,
});
