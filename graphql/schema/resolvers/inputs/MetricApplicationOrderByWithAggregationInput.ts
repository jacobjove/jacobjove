import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { MetricApplicationAvgOrderByAggregateInput } from "../inputs/MetricApplicationAvgOrderByAggregateInput";
import { MetricApplicationCountOrderByAggregateInput } from "../inputs/MetricApplicationCountOrderByAggregateInput";
import { MetricApplicationMaxOrderByAggregateInput } from "../inputs/MetricApplicationMaxOrderByAggregateInput";
import { MetricApplicationMinOrderByAggregateInput } from "../inputs/MetricApplicationMinOrderByAggregateInput";
import { MetricApplicationSumOrderByAggregateInput } from "../inputs/MetricApplicationSumOrderByAggregateInput";

@TypeGraphQL.InputType("MetricApplicationOrderByWithAggregationInput", {
  isAbstract: true,
})
export class MetricApplicationOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  metricId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationCountOrderByAggregateInput, { nullable: true })
  _count?: MetricApplicationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationAvgOrderByAggregateInput, { nullable: true })
  _avg?: MetricApplicationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationMaxOrderByAggregateInput, { nullable: true })
  _max?: MetricApplicationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationMinOrderByAggregateInput, { nullable: true })
  _min?: MetricApplicationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationSumOrderByAggregateInput, { nullable: true })
  _sum?: MetricApplicationSumOrderByAggregateInput | undefined;
}
