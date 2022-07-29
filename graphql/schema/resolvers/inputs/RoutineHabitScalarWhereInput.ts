import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoutineHabitScalarWhereInput", {
  isAbstract: true,
})
export class RoutineHabitScalarWhereInput {
  @TypeGraphQL.Field((_type) => [RoutineHabitScalarWhereInput], { nullable: true })
  AND?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarWhereInput], { nullable: true })
  OR?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarWhereInput], { nullable: true })
  NOT?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  routineId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  durationInMinutes?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
