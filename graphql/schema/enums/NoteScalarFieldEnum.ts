import * as TypeGraphQL from "type-graphql";

export enum NoteScalarFieldEnum {
  id = "id",
  notebookId = "notebookId",
  title = "title",
  body = "body",
  isPublic = "isPublic",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(NoteScalarFieldEnum, {
  name: "NoteScalarFieldEnum",
  description: undefined,
});
