import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateOrConnectWithoutMetricInput", { isAbstract: true })
export class MetricUsageCreateOrConnectWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutMetricInput, { nullable: false })
  create!: MetricUsageCreateWithoutMetricInput;
}
