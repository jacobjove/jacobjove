import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateWithoutMetricUsageInput, { nullable: false })
  data!: MetricRecordUpdateWithoutMetricUsageInput;
}
