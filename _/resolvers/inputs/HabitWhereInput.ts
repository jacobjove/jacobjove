import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionListRelationFilter } from "../inputs/ActionListRelationFilter";
import { ActionScheduleListRelationFilter } from "../inputs/ActionScheduleListRelationFilter";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CalendarEventListRelationFilter } from "../inputs/CalendarEventListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { GoalListRelationFilter } from "../inputs/GoalListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MetricUsageListRelationFilter } from "../inputs/MetricUsageListRelationFilter";
import { RoutineHabitListRelationFilter } from "../inputs/RoutineHabitListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("HabitWhereInput", { isAbstract: true })
export class HabitWhereInput {
  @TypeGraphQL.Field(() => [HabitWhereInput], { nullable: true })
  AND?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereInput], { nullable: true })
  OR?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereInput], { nullable: true })
  NOT?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => ActionScheduleListRelationFilter, { nullable: true })
  schedules?: ActionScheduleListRelationFilter | undefined;

  @TypeGraphQL.Field(() => CalendarEventListRelationFilter, { nullable: true })
  calendarEvents?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field(() => MetricUsageListRelationFilter, { nullable: true })
  metricUsages?: MetricUsageListRelationFilter | undefined;

  @TypeGraphQL.Field(() => GoalListRelationFilter, { nullable: true })
  goals?: GoalListRelationFilter | undefined;

  @TypeGraphQL.Field(() => RoutineHabitListRelationFilter, { nullable: true })
  routines?: RoutineHabitListRelationFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableFilter, { nullable: true })
  defaultDurationInMinutes?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(() => ActionListRelationFilter, { nullable: true })
  actions?: ActionListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
