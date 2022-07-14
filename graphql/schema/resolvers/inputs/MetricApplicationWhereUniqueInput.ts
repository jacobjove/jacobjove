import * as TypeGraphQL from "type-graphql";
import { MetricApplicationActIdMetricIdCompoundUniqueInput } from "../inputs/MetricApplicationActIdMetricIdCompoundUniqueInput";

@TypeGraphQL.InputType("MetricApplicationWhereUniqueInput", {
  isAbstract: true,
})
export class MetricApplicationWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationActIdMetricIdCompoundUniqueInput, {
    nullable: true,
  })
  actId_metricId?: MetricApplicationActIdMetricIdCompoundUniqueInput | undefined;
}
