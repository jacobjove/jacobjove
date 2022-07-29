import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ActionScheduleScalarFieldEnum {
  id = "id",
  habitId = "habitId",
  frequency = "frequency",
  multiplier = "multiplier",
  quantity = "quantity",
  active = "active",
  templateId = "templateId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ActionScheduleScalarFieldEnum, {
  name: "ActionScheduleScalarFieldEnum",
  description: undefined,
});
