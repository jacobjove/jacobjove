import * as TypeGraphQL from "type-graphql-v2-fork";

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
