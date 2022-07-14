import * as TypeGraphQL from "type-graphql";
import { MetricApplicationScalarWhereInput } from "../inputs/MetricApplicationScalarWhereInput";
import { MetricApplicationUpdateManyMutationInput } from "../inputs/MetricApplicationUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricApplicationUpdateManyWithWhereWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyWithWhereWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricApplicationScalarWhereInput, {
    nullable: false,
  })
  where!: MetricApplicationScalarWhereInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MetricApplicationUpdateManyMutationInput;
}
