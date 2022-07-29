import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MetricUsageHabitIdMetricIdCompoundUniqueInput", {
  isAbstract: true,
})
export class MetricUsageHabitIdMetricIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;
}
