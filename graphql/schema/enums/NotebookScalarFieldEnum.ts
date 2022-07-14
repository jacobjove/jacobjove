import * as TypeGraphQL from "type-graphql";

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
