import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  isbn = "isbn",
  isbn13 = "isbn13",
  title = "title",
  slug = "slug",
  description = "description",
  authorNames = "authorNames",
  authorNamesLf = "authorNamesLf",
  publicationYear = "publicationYear",
  originalPublicationYear = "originalPublicationYear",
  extra = "extra",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
