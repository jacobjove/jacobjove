import * as TypeGraphQL from "type-graphql";
import { MetricUsageUpdateWithoutMetricInput } from "../inputs/MetricUsageUpdateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithWhereUniqueWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutMetricInput, {
    nullable: false,
  })
  data!: MetricUsageUpdateWithoutMetricInput;
}
