import * as TypeGraphQL from "type-graphql";

export enum RoutineScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  durationInMinutes = "durationInMinutes",
  notes = "notes",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(RoutineScalarFieldEnum, {
  name: "RoutineScalarFieldEnum",
  description: undefined,
});
