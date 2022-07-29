import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ActionScalarFieldEnum {
  id = "id",
  habitId = "habitId",
  start = "start",
  end = "end",
  notes = "notes",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ActionScalarFieldEnum, {
  name: "ActionScalarFieldEnum",
  description: undefined,
});
