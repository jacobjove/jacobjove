import * as TypeGraphQL from "type-graphql";
import { MetricRecordScalarWhereInput } from "../inputs/MetricRecordScalarWhereInput";
import { MetricRecordUpdateManyMutationInput } from "../inputs/MetricRecordUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricRecordUpdateManyWithWhereWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateManyWithWhereWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => MetricRecordScalarWhereInput, {
    nullable: false,
  })
  where!: MetricRecordScalarWhereInput;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MetricRecordUpdateManyMutationInput;
}
