import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  plannedStartDate = "plannedStartDate",
  dueDate = "dueDate",
  userId = "userId",
  parentId = "parentId",
  habitId = "habitId",
  rank = "rank",
  completedAt = "completedAt",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
