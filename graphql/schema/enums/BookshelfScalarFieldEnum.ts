import * as TypeGraphQL from "type-graphql-v2-fork";

export enum BookshelfScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  name = "name",
  slug = "slug",
  public = "public",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BookshelfScalarFieldEnum, {
  name: "BookshelfScalarFieldEnum",
  description: undefined,
});
