import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationScalarWhereInput } from "../inputs/MetricApplicationScalarWhereInput";
import { MetricApplicationUpdateManyMutationInput } from "../inputs/MetricApplicationUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricApplicationUpdateManyWithWhereWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyWithWhereWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricApplicationScalarWhereInput, { nullable: false })
  where!: MetricApplicationScalarWhereInput;

  @TypeGraphQL.Field(() => MetricApplicationUpdateManyMutationInput, { nullable: false })
  data!: MetricApplicationUpdateManyMutationInput;
}
