import * as TypeGraphQL from "type-graphql-v2-fork";

export enum AuthorScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(AuthorScalarFieldEnum, {
  name: "AuthorScalarFieldEnum",
  description: undefined,
});
