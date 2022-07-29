import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricApplicationScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MetricApplicationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  actId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  metricId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
