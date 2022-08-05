import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordUpdateWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateWithoutMetricUsageInput, { nullable: false })
  update!: MetricRecordUpdateWithoutMetricUsageInput;

  @TypeGraphQL.Field(() => MetricRecordCreateWithoutMetricUsageInput, { nullable: false })
  create!: MetricRecordCreateWithoutMetricUsageInput;
}
