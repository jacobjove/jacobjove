import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateManyMetricInputEnvelope } from "../inputs/MetricUsageCreateManyMetricInputEnvelope";
import { MetricUsageCreateOrConnectWithoutMetricInput } from "../inputs/MetricUsageCreateOrConnectWithoutMetricInput";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageCreateNestedManyWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageCreateNestedManyWithoutMetricInput {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateWithoutMetricInput], {
    nullable: true,
  })
  create?: MetricUsageCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageCreateOrConnectWithoutMetricInput], {
    nullable: true,
  })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateManyMetricInputEnvelope, {
    nullable: true,
  })
  createMany?: MetricUsageCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MetricUsageWhereUniqueInput[] | undefined;
}
