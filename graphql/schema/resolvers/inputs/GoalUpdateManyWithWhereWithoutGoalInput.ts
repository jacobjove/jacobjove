import * as TypeGraphQL from "type-graphql";
import { GoalScalarWhereInput } from "../inputs/GoalScalarWhereInput";
import { GoalUpdateManyMutationInput } from "../inputs/GoalUpdateManyMutationInput";

@TypeGraphQL.InputType("GoalUpdateManyWithWhereWithoutGoalInput", {
  isAbstract: true,
})
export class GoalUpdateManyWithWhereWithoutGoalInput {
  @TypeGraphQL.Field((_type) => GoalScalarWhereInput, {
    nullable: false,
  })
  where!: GoalScalarWhereInput;

  @TypeGraphQL.Field((_type) => GoalUpdateManyMutationInput, {
    nullable: false,
  })
  data!: GoalUpdateManyMutationInput;
}
