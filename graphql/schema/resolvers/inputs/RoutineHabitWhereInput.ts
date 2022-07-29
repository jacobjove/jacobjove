import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoutineRelationFilter } from "../inputs/RoutineRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoutineHabitWhereInput", {
  isAbstract: true,
})
export class RoutineHabitWhereInput {
  @TypeGraphQL.Field((_type) => [RoutineHabitWhereInput], { nullable: true })
  AND?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereInput], { nullable: true })
  OR?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereInput], { nullable: true })
  NOT?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => RoutineRelationFilter, { nullable: true })
  routine?: RoutineRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  routineId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

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
