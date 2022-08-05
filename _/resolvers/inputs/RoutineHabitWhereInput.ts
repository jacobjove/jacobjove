import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoutineRelationFilter } from "../inputs/RoutineRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoutineHabitWhereInput", { isAbstract: true })
export class RoutineHabitWhereInput {
  @TypeGraphQL.Field(() => [RoutineHabitWhereInput], { nullable: true })
  AND?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereInput], { nullable: true })
  OR?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereInput], { nullable: true })
  NOT?: RoutineHabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => RoutineRelationFilter, { nullable: true })
  routine?: RoutineRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  routineId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  durationInMinutes?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
