import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { CalendarEventOrderByRelationAggregateInput } from "../inputs/CalendarEventOrderByRelationAggregateInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@TypeGraphQL.InputType("TaskOrderByWithRelationInput", {
  isAbstract: true,
})
export class TaskOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  plannedStartDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  dueDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => TaskOrderByWithRelationInput, { nullable: true })
  parent?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitOrderByWithRelationInput, { nullable: true })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => TaskOrderByRelationAggregateInput, { nullable: true })
  subtasks?: TaskOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  rank?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  completedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CalendarEventOrderByRelationAggregateInput, { nullable: true })
  calendarEvents?: CalendarEventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
