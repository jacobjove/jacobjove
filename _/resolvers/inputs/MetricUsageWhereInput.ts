import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { MetricRecordListRelationFilter } from "../inputs/MetricRecordListRelationFilter";
import { MetricRelationFilter } from "../inputs/MetricRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricUsageWhereInput", { isAbstract: true })
export class MetricUsageWhereInput {
  @TypeGraphQL.Field(() => [MetricUsageWhereInput], { nullable: true })
  AND?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereInput], { nullable: true })
  OR?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereInput], { nullable: true })
  NOT?: MetricUsageWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => MetricRelationFilter, { nullable: true })
  metric?: MetricRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => MetricRecordListRelationFilter, { nullable: true })
  records?: MetricRecordListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
