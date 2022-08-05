import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionRelationFilter } from "../inputs/ActionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MetricUsageRelationFilter } from "../inputs/MetricUsageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricRecordWhereInput", { isAbstract: true })
export class MetricRecordWhereInput {
  @TypeGraphQL.Field(() => [MetricRecordWhereInput], { nullable: true })
  AND?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereInput], { nullable: true })
  OR?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereInput], { nullable: true })
  NOT?: MetricRecordWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricUsageId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => MetricUsageRelationFilter, { nullable: true })
  metricUsage?: MetricUsageRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActionRelationFilter, { nullable: true })
  action?: ActionRelationFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
