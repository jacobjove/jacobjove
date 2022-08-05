import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageHabitIdMetricIdCompoundUniqueInput } from "../inputs/MetricUsageHabitIdMetricIdCompoundUniqueInput";

@TypeGraphQL.InputType("MetricUsageWhereUniqueInput", { isAbstract: true })
export class MetricUsageWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => MetricUsageHabitIdMetricIdCompoundUniqueInput, { nullable: true })
  habitId_metricId?: MetricUsageHabitIdMetricIdCompoundUniqueInput | undefined;
}
