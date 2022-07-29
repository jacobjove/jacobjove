import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { MetricAvgOrderByAggregateInput } from "../inputs/MetricAvgOrderByAggregateInput";
import { MetricCountOrderByAggregateInput } from "../inputs/MetricCountOrderByAggregateInput";
import { MetricMaxOrderByAggregateInput } from "../inputs/MetricMaxOrderByAggregateInput";
import { MetricMinOrderByAggregateInput } from "../inputs/MetricMinOrderByAggregateInput";
import { MetricSumOrderByAggregateInput } from "../inputs/MetricSumOrderByAggregateInput";

@TypeGraphQL.InputType("MetricOrderByWithAggregationInput", {
  isAbstract: true,
})
export class MetricOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricCountOrderByAggregateInput, { nullable: true })
  _count?: MetricCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricAvgOrderByAggregateInput, { nullable: true })
  _avg?: MetricAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricMaxOrderByAggregateInput, { nullable: true })
  _max?: MetricMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricMinOrderByAggregateInput, { nullable: true })
  _min?: MetricMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricSumOrderByAggregateInput, { nullable: true })
  _sum?: MetricSumOrderByAggregateInput | undefined;
}
