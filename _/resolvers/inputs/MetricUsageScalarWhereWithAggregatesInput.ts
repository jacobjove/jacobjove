import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricUsageScalarWhereWithAggregatesInput", { isAbstract: true })
export class MetricUsageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [MetricUsageScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  metricId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
