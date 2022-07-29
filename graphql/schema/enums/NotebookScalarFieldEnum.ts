import * as TypeGraphQL from "type-graphql-v2-fork";

export enum NotebookScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  title = "title",
  isPublic = "isPublic",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(NotebookScalarFieldEnum, {
  name: "NotebookScalarFieldEnum",
  description: undefined,
});
