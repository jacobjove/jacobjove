import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricApplicationScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MetricApplicationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MetricApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  actId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  metricId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
