import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { MetricUsageAvgOrderByAggregateInput } from "../inputs/MetricUsageAvgOrderByAggregateInput";
import { MetricUsageCountOrderByAggregateInput } from "../inputs/MetricUsageCountOrderByAggregateInput";
import { MetricUsageMaxOrderByAggregateInput } from "../inputs/MetricUsageMaxOrderByAggregateInput";
import { MetricUsageMinOrderByAggregateInput } from "../inputs/MetricUsageMinOrderByAggregateInput";
import { MetricUsageSumOrderByAggregateInput } from "../inputs/MetricUsageSumOrderByAggregateInput";

@TypeGraphQL.InputType("MetricUsageOrderByWithAggregationInput", {
  isAbstract: true,
})
export class MetricUsageOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  metricId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => MetricUsageCountOrderByAggregateInput, { nullable: true })
  _count?: MetricUsageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageAvgOrderByAggregateInput, { nullable: true })
  _avg?: MetricUsageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageMaxOrderByAggregateInput, { nullable: true })
  _max?: MetricUsageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageMinOrderByAggregateInput, { nullable: true })
  _min?: MetricUsageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageSumOrderByAggregateInput, { nullable: true })
  _sum?: MetricUsageSumOrderByAggregateInput | undefined;
}
