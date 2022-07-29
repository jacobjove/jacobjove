import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageScalarWhereInput } from "../inputs/MetricUsageScalarWhereInput";
import { MetricUsageUpdateManyMutationInput } from "../inputs/MetricUsageUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricUsageUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field((_type) => MetricUsageScalarWhereInput, { nullable: false })
  where!: MetricUsageScalarWhereInput;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyMutationInput, { nullable: false })
  data!: MetricUsageUpdateManyMutationInput;
}
