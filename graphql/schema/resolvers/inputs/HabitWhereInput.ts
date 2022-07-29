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
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("HabitWhereInput", {
  isAbstract: true,
})
export class HabitWhereInput {
  @TypeGraphQL.Field((_type) => [HabitWhereInput], { nullable: true })
  AND?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereInput], { nullable: true })
  OR?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereInput], { nullable: true })
  NOT?: HabitWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleListRelationFilter, { nullable: true })
  schedules?: ActionScheduleListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => TaskListRelationFilter, { nullable: true })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventListRelationFilter, { nullable: true })
  calendarEvents?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageListRelationFilter, { nullable: true })
  metricUsages?: MetricUsageListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => GoalListRelationFilter, { nullable: true })
  goals?: GoalListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitListRelationFilter, { nullable: true })
  routines?: RoutineHabitListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, { nullable: true })
  defaultDurationInMinutes?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionListRelationFilter, { nullable: true })
  actions?: ActionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
