import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageScalarWhereInput } from "../inputs/MetricUsageScalarWhereInput";
import { MetricUsageUpdateManyMutationInput } from "../inputs/MetricUsageUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricUsageUpdateManyWithWhereWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpdateManyWithWhereWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricUsageScalarWhereInput, { nullable: false })
  where!: MetricUsageScalarWhereInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyMutationInput, { nullable: false })
  data!: MetricUsageUpdateManyMutationInput;
}
