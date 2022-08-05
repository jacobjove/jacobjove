import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationActIdMetricIdCompoundUniqueInput } from "../inputs/MetricApplicationActIdMetricIdCompoundUniqueInput";

@TypeGraphQL.InputType("MetricApplicationWhereUniqueInput", { isAbstract: true })
export class MetricApplicationWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => MetricApplicationActIdMetricIdCompoundUniqueInput, {
    nullable: true,
  })
  actId_metricId?: MetricApplicationActIdMetricIdCompoundUniqueInput | undefined;
}
