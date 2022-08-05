import * as TypeGraphQL from "type-graphql-v2-fork";

export enum NoteScalarFieldEnum {
  id = "id",
  notebookId = "notebookId",
  title = "title",
  body = "body",
  public = "public",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(NoteScalarFieldEnum, {
  name: "NoteScalarFieldEnum",
  description: undefined,
});
