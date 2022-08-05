import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleTemplateOrderByWithRelationInput } from "../inputs/ActionScheduleTemplateOrderByWithRelationInput";
import { CalendarEventOrderByRelationAggregateInput } from "../inputs/CalendarEventOrderByRelationAggregateInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";

@TypeGraphQL.InputType("ActionScheduleOrderByWithRelationInput", { isAbstract: true })
export class ActionScheduleOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitOrderByWithRelationInput, { nullable: true })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CalendarEventOrderByRelationAggregateInput, { nullable: true })
  calendarEvents?: CalendarEventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateOrderByWithRelationInput, { nullable: true })
  template?: ActionScheduleTemplateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  templateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
