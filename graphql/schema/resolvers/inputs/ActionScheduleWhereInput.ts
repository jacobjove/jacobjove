import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateRelationFilter } from "../inputs/ActionScheduleTemplateRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CalendarEventListRelationFilter } from "../inputs/CalendarEventListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumFREQUENCYFilter } from "../inputs/EnumFREQUENCYFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActionScheduleWhereInput", {
  isAbstract: true,
})
export class ActionScheduleWhereInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleWhereInput], {
    nullable: true,
  })
  AND?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereInput], {
    nullable: true,
  })
  OR?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereInput], {
    nullable: true,
  })
  NOT?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitRelationFilter, {
    nullable: true,
  })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFREQUENCYFilter, {
    nullable: true,
  })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventListRelationFilter, {
    nullable: true,
  })
  calendarEvents?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateRelationFilter, {
    nullable: true,
  })
  template?: ActionScheduleTemplateRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  templateId?: StringNullableFilter | undefined;

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
