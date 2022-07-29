import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricApplicationActIdMetricIdCompoundUniqueInput", {
  isAbstract: true,
})
export class MetricApplicationActIdMetricIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  metricId!: string;
}
