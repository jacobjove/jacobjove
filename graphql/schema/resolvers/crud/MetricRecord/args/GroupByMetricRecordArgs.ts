import * as TypeGraphQL from "type-graphql";
import { MetricRecordScalarFieldEnum } from "../../../../enums/MetricRecordScalarFieldEnum";
import { MetricRecordOrderByWithAggregationInput } from "../../../inputs/MetricRecordOrderByWithAggregationInput";
import { MetricRecordScalarWhereWithAggregatesInput } from "../../../inputs/MetricRecordScalarWhereWithAggregatesInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  where?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MetricRecordOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "metricUsageId" | "actionId" | "value" | "createdAt" | "updatedAt" | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => MetricRecordScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MetricRecordScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
