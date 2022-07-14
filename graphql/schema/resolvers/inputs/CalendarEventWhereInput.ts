import * as TypeGraphQL from "type-graphql";
import { ActionScheduleRelationFilter } from "../inputs/ActionScheduleRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CalendarRelationFilter } from "../inputs/CalendarRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";

@TypeGraphQL.InputType("CalendarEventWhereInput", {
  isAbstract: true,
})
export class CalendarEventWhereInput {
  @TypeGraphQL.Field((_type) => [CalendarEventWhereInput], {
    nullable: true,
  })
  AND?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereInput], {
    nullable: true,
  })
  OR?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereInput], {
    nullable: true,
  })
  NOT?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarRelationFilter, {
    nullable: true,
  })
  calendar?: CalendarRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  calendarId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleRelationFilter, {
    nullable: true,
  })
  schedule?: ActionScheduleRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  scheduleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitRelationFilter, {
    nullable: true,
  })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => TaskRelationFilter, {
    nullable: true,
  })
  task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  taskId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  end?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  allDay?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, {
    nullable: true,
  })
  canceled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
