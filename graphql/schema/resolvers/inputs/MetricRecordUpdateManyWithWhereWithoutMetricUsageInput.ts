import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordScalarWhereInput } from "../inputs/MetricRecordScalarWhereInput";
import { MetricRecordUpdateManyMutationInput } from "../inputs/MetricRecordUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricRecordUpdateManyWithWhereWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateManyWithWhereWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => MetricRecordScalarWhereInput, { nullable: false })
  where!: MetricRecordScalarWhereInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateManyMutationInput, { nullable: false })
  data!: MetricRecordUpdateManyMutationInput;
}
