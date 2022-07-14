import * as TypeGraphQL from "type-graphql";

export enum AuthorshipScalarFieldEnum {
  id = "id",
  authorId = "authorId",
  bookId = "bookId",
  position = "position",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(AuthorshipScalarFieldEnum, {
  name: "AuthorshipScalarFieldEnum",
  description: undefined,
});
