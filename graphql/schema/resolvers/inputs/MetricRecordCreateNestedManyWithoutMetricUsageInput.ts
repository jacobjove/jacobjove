import * as TypeGraphQL from "type-graphql";
import { MetricRecordCreateManyMetricUsageInputEnvelope } from "../inputs/MetricRecordCreateManyMetricUsageInputEnvelope";
import { MetricRecordCreateOrConnectWithoutMetricUsageInput } from "../inputs/MetricRecordCreateOrConnectWithoutMetricUsageInput";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateNestedManyWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordCreateNestedManyWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateWithoutMetricUsageInput], {
    nullable: true,
  })
  create?: MetricRecordCreateWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordCreateOrConnectWithoutMetricUsageInput], {
    nullable: true,
  })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateManyMetricUsageInputEnvelope, {
    nullable: true,
  })
  createMany?: MetricRecordCreateManyMetricUsageInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], {
    nullable: true,
  })
  connect?: MetricRecordWhereUniqueInput[] | undefined;
}
