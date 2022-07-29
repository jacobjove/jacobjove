import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageHabitIdMetricIdCompoundUniqueInput } from "../inputs/MetricUsageHabitIdMetricIdCompoundUniqueInput";

@TypeGraphQL.InputType("MetricUsageWhereUniqueInput", {
  isAbstract: true,
})
export class MetricUsageWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageHabitIdMetricIdCompoundUniqueInput, { nullable: true })
  habitId_metricId?: MetricUsageHabitIdMetricIdCompoundUniqueInput | undefined;
}
