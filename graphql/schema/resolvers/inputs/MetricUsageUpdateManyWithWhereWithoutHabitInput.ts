import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageScalarWhereInput } from "../inputs/MetricUsageScalarWhereInput";
import { MetricUsageUpdateManyMutationInput } from "../inputs/MetricUsageUpdateManyMutationInput";

@TypeGraphQL.InputType("MetricUsageUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field(() => MetricUsageScalarWhereInput, { nullable: false })
  where!: MetricUsageScalarWhereInput;

  @TypeGraphQL.Field(() => MetricUsageUpdateManyMutationInput, { nullable: false })
  data!: MetricUsageUpdateManyMutationInput;
}
