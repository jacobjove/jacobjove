import * as TypeGraphQL from "type-graphql-v2-fork";
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

@TypeGraphQL.InputType("ActionScheduleWhereInput", { isAbstract: true })
export class ActionScheduleWhereInput {
  @TypeGraphQL.Field(() => [ActionScheduleWhereInput], { nullable: true })
  AND?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereInput], { nullable: true })
  OR?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereInput], { nullable: true })
  NOT?: ActionScheduleWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYFilter, { nullable: true })
  frequency?: EnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  multiplier?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(() => CalendarEventListRelationFilter, { nullable: true })
  calendarEvents?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateRelationFilter, { nullable: true })
  template?: ActionScheduleTemplateRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  templateId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
