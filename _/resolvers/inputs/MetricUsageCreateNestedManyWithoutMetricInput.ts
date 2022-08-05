import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyMetricInputEnvelope } from "../inputs/MetricUsageCreateManyMetricInputEnvelope";
import { MetricUsageCreateOrConnectWithoutMetricInput } from "../inputs/MetricUsageCreateOrConnectWithoutMetricInput";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedManyWithoutMetricInput", { isAbstract: true })
export class MetricUsageCreateNestedManyWithoutMetricInput {
  @TypeGraphQL.Field(() => [MetricUsageCreateWithoutMetricInput], { nullable: true })
  create?: MetricUsageCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageCreateOrConnectWithoutMetricInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateManyMetricInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;
}
