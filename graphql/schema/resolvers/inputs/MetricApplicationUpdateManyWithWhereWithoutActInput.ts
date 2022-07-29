import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationScalarWhereInput } from "../inputs/MetricApplicationScalarWhereInput";
import { MetricApplicationUpdateManyMutationInput } from "../inputs/MetricApplicationUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricApplicationUpdateManyWithWhereWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field((_type) => MetricApplicationScalarWhereInput, { nullable: false })
  where!: MetricApplicationScalarWhereInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyMutationInput, { nullable: false })
  data!: MetricApplicationUpdateManyMutationInput;
}
