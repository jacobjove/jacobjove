import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleOrderByWithRelationInput } from "../inputs/ActionScheduleOrderByWithRelationInput";
import { CalendarOrderByWithRelationInput } from "../inputs/CalendarOrderByWithRelationInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";

@TypeGraphQL.InputType("CalendarEventOrderByWithRelationInput", {
  isAbstract: true,
})
export class CalendarEventOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  remoteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => CalendarOrderByWithRelationInput, {
    nullable: true,
  })
  calendar?: CalendarOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  calendarId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleOrderByWithRelationInput, {
    nullable: true,
  })
  schedule?: ActionScheduleOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  scheduleId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByWithRelationInput, {
    nullable: true,
  })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => TaskOrderByWithRelationInput, {
    nullable: true,
  })
  task?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  taskId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  allDay?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  canceled?: "asc" | "desc" | undefined;

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
