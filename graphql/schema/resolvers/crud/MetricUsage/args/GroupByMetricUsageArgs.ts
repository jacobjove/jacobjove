import * as TypeGraphQL from "type-graphql";
import { MetricUsageScalarFieldEnum } from "../../../../enums/MetricUsageScalarFieldEnum";
import { MetricUsageOrderByWithAggregationInput } from "../../../inputs/MetricUsageOrderByWithAggregationInput";
import { MetricUsageScalarWhereWithAggregatesInput } from "../../../inputs/MetricUsageScalarWhereWithAggregatesInput";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageWhereInput, {
    nullable: true,
  })
  where?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MetricUsageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "metricId" | "habitId" | "archivedAt">;

  @TypeGraphQL.Field((_type) => MetricUsageScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MetricUsageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
