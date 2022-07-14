import * as TypeGraphQL from "type-graphql";
import { MetricApplicationScalarFieldEnum } from "../../../../enums/MetricApplicationScalarFieldEnum";
import { MetricApplicationOrderByWithAggregationInput } from "../../../inputs/MetricApplicationOrderByWithAggregationInput";
import { MetricApplicationScalarWhereWithAggregatesInput } from "../../../inputs/MetricApplicationScalarWhereWithAggregatesInput";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereInput, {
    nullable: true,
  })
  where?: MetricApplicationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MetricApplicationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "actId" | "metricId" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => MetricApplicationScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MetricApplicationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
