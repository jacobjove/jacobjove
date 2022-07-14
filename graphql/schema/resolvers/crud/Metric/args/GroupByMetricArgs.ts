import * as TypeGraphQL from "type-graphql";
import { MetricScalarFieldEnum } from "../../../../enums/MetricScalarFieldEnum";
import { MetricOrderByWithAggregationInput } from "../../../inputs/MetricOrderByWithAggregationInput";
import { MetricScalarWhereWithAggregatesInput } from "../../../inputs/MetricScalarWhereWithAggregatesInput";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereInput, {
    nullable: true,
  })
  where?: MetricWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MetricOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field((_type) => MetricScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MetricScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
