import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleTemplateOrderByWithRelationInput } from "../inputs/ActionScheduleTemplateOrderByWithRelationInput";
import { CalendarEventOrderByRelationAggregateInput } from "../inputs/CalendarEventOrderByRelationAggregateInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";

@TypeGraphQL.InputType("ActionScheduleOrderByWithRelationInput", {
  isAbstract: true,
})
export class ActionScheduleOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByWithRelationInput, {
    nullable: true,
  })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventOrderByRelationAggregateInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateOrderByWithRelationInput, {
    nullable: true,
  })
  template?: ActionScheduleTemplateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  templateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;
}
