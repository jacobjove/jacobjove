import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { MetricApplicationOrderByRelationAggregateInput } from "../inputs/MetricApplicationOrderByRelationAggregateInput";
import { MetricUsageOrderByRelationAggregateInput } from "../inputs/MetricUsageOrderByRelationAggregateInput";

@TypeGraphQL.InputType("MetricOrderByWithRelationInput", {
  isAbstract: true,
})
export class MetricOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationOrderByRelationAggregateInput, { nullable: true })
  applications?: MetricApplicationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageOrderByRelationAggregateInput, { nullable: true })
  usages?: MetricUsageOrderByRelationAggregateInput | undefined;
}
