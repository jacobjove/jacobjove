import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("MetricUsageHabitIdMetricIdCompoundUniqueInput", {
  isAbstract: true,
})
export class MetricUsageHabitIdMetricIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  metricId!: string;
}
