import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateOrConnectWithoutMetricUsageInput", { isAbstract: true })
export class MetricRecordCreateOrConnectWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordCreateWithoutMetricUsageInput, { nullable: false })
  create!: MetricRecordCreateWithoutMetricUsageInput;
}
