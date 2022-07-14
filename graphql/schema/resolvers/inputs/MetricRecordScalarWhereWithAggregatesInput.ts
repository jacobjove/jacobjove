import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricRecordScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MetricRecordScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MetricRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MetricRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MetricRecordScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  metricUsageId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  actionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
