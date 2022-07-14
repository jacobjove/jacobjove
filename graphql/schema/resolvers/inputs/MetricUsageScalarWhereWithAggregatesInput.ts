import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricUsageScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MetricUsageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MetricUsageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  metricId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
