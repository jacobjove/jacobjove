import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [ActionWhereInput], {
    nullable: true,
  })
  AND?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereInput], {
    nullable: true,
  })
  OR?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereInput], {
    nullable: true,
  })
  NOT?: ActionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitRelationFilter, {
    nullable: true,
  })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordListRelationFilter, {
    nullable: true,
  })
  metricRecords?: MetricRecordListRelationFilter | undefined;

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
