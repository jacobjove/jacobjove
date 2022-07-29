import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageUpdateWithoutMetricInput } from "../inputs/MetricUsageUpdateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithWhereUniqueWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpsertWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateWithoutMetricInput, { nullable: false })
  update!: MetricUsageUpdateWithoutMetricInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutMetricInput, { nullable: false })
  create!: MetricUsageCreateWithoutMetricInput;
}
