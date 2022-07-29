import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageCreateOrConnectWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricUsageCreateWithoutMetricInput, { nullable: false })
  create!: MetricUsageCreateWithoutMetricInput;
}
