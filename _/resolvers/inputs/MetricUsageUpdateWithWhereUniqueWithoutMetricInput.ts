import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateWithoutMetricInput } from "../inputs/MetricUsageUpdateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithWhereUniqueWithoutMetricInput", { isAbstract: true })
export class MetricUsageUpdateWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageUpdateWithoutMetricInput, { nullable: false })
  data!: MetricUsageUpdateWithoutMetricInput;
}
