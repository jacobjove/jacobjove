import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateWithoutMetricUsageInput, { nullable: false })
  data!: MetricRecordUpdateWithoutMetricUsageInput;
}
