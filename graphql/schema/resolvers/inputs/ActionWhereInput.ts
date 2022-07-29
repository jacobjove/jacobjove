import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { MetricRecordListRelationFilter } from "../inputs/MetricRecordListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActionWhereInput", {
  isAbstract: true,
})
export class ActionWhereInput {
  @TypeGraphQL.Field(() => [ActionWhereInput], { nullable: true })
  AND?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionWhereInput], { nullable: true })
  OR?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionWhereInput], { nullable: true })
  NOT?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => MetricRecordListRelationFilter, { nullable: true })
  metricRecords?: MetricRecordListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
