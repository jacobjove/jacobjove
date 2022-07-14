import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { MetricRecordAvgOrderByAggregateInput } from "../inputs/MetricRecordAvgOrderByAggregateInput";
import { MetricRecordCountOrderByAggregateInput } from "../inputs/MetricRecordCountOrderByAggregateInput";
import { MetricRecordMaxOrderByAggregateInput } from "../inputs/MetricRecordMaxOrderByAggregateInput";
import { MetricRecordMinOrderByAggregateInput } from "../inputs/MetricRecordMinOrderByAggregateInput";
import { MetricRecordSumOrderByAggregateInput } from "../inputs/MetricRecordSumOrderByAggregateInput";

@TypeGraphQL.InputType("MetricRecordOrderByWithAggregationInput", {
  isAbstract: true,
})
export class MetricRecordOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  metricUsageId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MetricRecordCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MetricRecordAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MetricRecordMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MetricRecordMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MetricRecordSumOrderByAggregateInput | undefined;
}
