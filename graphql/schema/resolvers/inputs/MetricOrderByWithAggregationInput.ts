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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => MetricCountOrderByAggregateInput, { nullable: true })
  _count?: MetricCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricAvgOrderByAggregateInput, { nullable: true })
  _avg?: MetricAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricMaxOrderByAggregateInput, { nullable: true })
  _max?: MetricMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricMinOrderByAggregateInput, { nullable: true })
  _min?: MetricMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricSumOrderByAggregateInput, { nullable: true })
  _sum?: MetricSumOrderByAggregateInput | undefined;
}
