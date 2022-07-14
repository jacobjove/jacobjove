import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { MetricRecordListRelationFilter } from "../inputs/MetricRecordListRelationFilter";
import { MetricRelationFilter } from "../inputs/MetricRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricUsageWhereInput", {
  isAbstract: true,
})
export class MetricUsageWhereInput {
  @TypeGraphQL.Field((_type) => [MetricUsageWhereInput], {
    nullable: true,
  })
  AND?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereInput], {
    nullable: true,
  })
  OR?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereInput], {
    nullable: true,
  })
  NOT?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricRelationFilter, {
    nullable: true,
  })
  metric?: MetricRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitRelationFilter, {
    nullable: true,
  })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordListRelationFilter, {
    nullable: true,
  })
  records?: MetricRecordListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
