import * as TypeGraphQL from "type-graphql";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateOrConnectWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordCreateOrConnectWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricRecordCreateWithoutMetricUsageInput, {
    nullable: false,
  })
  create!: MetricRecordCreateWithoutMetricUsageInput;
}
