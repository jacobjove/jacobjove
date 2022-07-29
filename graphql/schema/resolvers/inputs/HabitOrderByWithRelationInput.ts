import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionOrderByRelationAggregateInput } from "../inputs/ActionOrderByRelationAggregateInput";
import { ActionScheduleOrderByRelationAggregateInput } from "../inputs/ActionScheduleOrderByRelationAggregateInput";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { CalendarEventOrderByRelationAggregateInput } from "../inputs/CalendarEventOrderByRelationAggregateInput";
import { GoalOrderByRelationAggregateInput } from "../inputs/GoalOrderByRelationAggregateInput";
import { MetricUsageOrderByRelationAggregateInput } from "../inputs/MetricUsageOrderByRelationAggregateInput";
import { RoutineHabitOrderByRelationAggregateInput } from "../inputs/RoutineHabitOrderByRelationAggregateInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@TypeGraphQL.InputType("HabitOrderByWithRelationInput", {
  isAbstract: true,
})
export class HabitOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByWithRelationInput, { nullable: true })
  act?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleOrderByRelationAggregateInput, { nullable: true })
  schedules?: ActionScheduleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => TaskOrderByRelationAggregateInput, { nullable: true })
  tasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventOrderByRelationAggregateInput, { nullable: true })
  calendarEvents?: CalendarEventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageOrderByRelationAggregateInput, { nullable: true })
  metricUsages?: MetricUsageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => GoalOrderByRelationAggregateInput, { nullable: true })
  goals?: GoalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitOrderByRelationAggregateInput, { nullable: true })
  routines?: RoutineHabitOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  defaultDurationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionOrderByRelationAggregateInput, { nullable: true })
  actions?: ActionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
