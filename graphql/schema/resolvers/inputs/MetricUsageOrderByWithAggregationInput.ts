import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  metricId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MetricUsageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MetricUsageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MetricUsageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MetricUsageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MetricUsageSumOrderByAggregateInput | undefined;
}
