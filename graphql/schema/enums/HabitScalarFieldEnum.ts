import * as TypeGraphQL from "type-graphql-v2-fork";

export enum HabitScalarFieldEnum {
  id = "id",
  actId = "actId",
  userId = "userId",
  name = "name",
  isPublic = "isPublic",
  defaultDurationInMinutes = "defaultDurationInMinutes",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(HabitScalarFieldEnum, {
  name: "HabitScalarFieldEnum",
  description: undefined,
});
