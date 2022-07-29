import * as TypeGraphQL from "type-graphql-v2-fork";

export enum RoutineHabitScalarFieldEnum {
  id = "id",
  routineId = "routineId",
  habitId = "habitId",
  position = "position",
  durationInMinutes = "durationInMinutes",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(RoutineHabitScalarFieldEnum, {
  name: "RoutineHabitScalarFieldEnum",
  description: undefined,
});
