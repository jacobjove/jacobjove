import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionRelationFilter } from "../inputs/ActionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MetricUsageRelationFilter } from "../inputs/MetricUsageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricRecordWhereInput", {
  isAbstract: true,
})
export class MetricRecordWhereInput {
  @TypeGraphQL.Field((_type) => [MetricRecordWhereInput], { nullable: true })
  AND?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereInput], { nullable: true })
  OR?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereInput], { nullable: true })
  NOT?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  metricUsageId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageRelationFilter, { nullable: true })
  metricUsage?: MetricUsageRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionRelationFilter, { nullable: true })
  action?: ActionRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
