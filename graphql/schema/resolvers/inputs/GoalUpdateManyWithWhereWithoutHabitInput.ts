import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalScalarWhereInput } from "../inputs/GoalScalarWhereInput";
import { GoalUpdateManyMutationInput } from "../inputs/GoalUpdateManyMutationInput";

@TypeGraphQL.InputType("GoalUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field(() => GoalScalarWhereInput, { nullable: false })
  where!: GoalScalarWhereInput;

  @TypeGraphQL.Field(() => GoalUpdateManyMutationInput, { nullable: false })
  data!: GoalUpdateManyMutationInput;
}
