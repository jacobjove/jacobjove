import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordUpdateWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateWithoutMetricUsageInput, { nullable: false })
  update!: MetricRecordUpdateWithoutMetricUsageInput;

  @TypeGraphQL.Field((_type) => MetricRecordCreateWithoutMetricUsageInput, { nullable: false })
  create!: MetricRecordCreateWithoutMetricUsageInput;
}
