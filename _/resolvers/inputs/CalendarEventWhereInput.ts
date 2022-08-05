import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CalendarRelationFilter } from "../inputs/CalendarRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CalendarEventWhereInput", { isAbstract: true })
export class CalendarEventWhereInput {
  @TypeGraphQL.Field(() => [CalendarEventWhereInput], { nullable: true })
  AND?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereInput], { nullable: true })
  OR?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereInput], { nullable: true })
  NOT?: CalendarEventWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => CalendarRelationFilter, { nullable: true })
  calendar?: CalendarRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  calendarId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  scheduleId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  taskId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  end?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  allDay?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  canceled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
