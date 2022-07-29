import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateManyWithoutMetricInput } from "../inputs/MetricApplicationUpdateManyWithoutMetricInput";
import { MetricUsageUpdateManyWithoutMetricInput } from "../inputs/MetricUsageUpdateManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricUpdateInput", {
  isAbstract: true,
})
export class MetricUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => MetricApplicationUpdateManyWithoutMetricInput, { nullable: true })
  applications?: MetricApplicationUpdateManyWithoutMetricInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateManyWithoutMetricInput, { nullable: true })
  usages?: MetricUsageUpdateManyWithoutMetricInput | undefined;
}
