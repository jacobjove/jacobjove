import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyMetricUsageInputEnvelope } from "../inputs/MetricRecordCreateManyMetricUsageInputEnvelope";
import { MetricRecordCreateOrConnectWithoutMetricUsageInput } from "../inputs/MetricRecordCreateOrConnectWithoutMetricUsageInput";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateNestedManyWithoutMetricUsageInput", { isAbstract: true })
export class MetricRecordCreateNestedManyWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => [MetricRecordCreateWithoutMetricUsageInput], { nullable: true })
  create?: MetricRecordCreateWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordCreateOrConnectWithoutMetricUsageInput], {
    nullable: true,
  })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field(() => MetricRecordCreateManyMetricUsageInputEnvelope, { nullable: true })
  createMany?: MetricRecordCreateManyMetricUsageInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  connect?: MetricRecordWhereUniqueInput[] | undefined;
}
