import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CalendarEventScalarWhereInput", {
  isAbstract: true,
})
export class CalendarEventScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], { nullable: true })
  AND?: CalendarEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], { nullable: true })
  OR?: CalendarEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], { nullable: true })
  NOT?: CalendarEventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  calendarId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  scheduleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  taskId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  end?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  allDay?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, { nullable: true })
  canceled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
