import * as TypeGraphQL from "type-graphql";

export enum ShelvingScalarFieldEnum {
  id = "id",
  bookId = "bookId",
  shelfId = "shelfId",
  position = "position",
  rationale = "rationale",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ShelvingScalarFieldEnum, {
  name: "ShelvingScalarFieldEnum",
  description: undefined,
});
