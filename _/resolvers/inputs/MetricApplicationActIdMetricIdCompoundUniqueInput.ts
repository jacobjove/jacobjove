import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricApplicationActIdMetricIdCompoundUniqueInput", { isAbstract: true })
export class MetricApplicationActIdMetricIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;
}
