import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalScalarWhereInput } from "../inputs/GoalScalarWhereInput";
import { GoalUpdateManyMutationInput } from "../inputs/GoalUpdateManyMutationInput";

@TypeGraphQL.InputType("GoalUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field((_type) => GoalScalarWhereInput, { nullable: false })
  where!: GoalScalarWhereInput;

  @TypeGraphQL.Field((_type) => GoalUpdateManyMutationInput, { nullable: false })
  data!: GoalUpdateManyMutationInput;
}
