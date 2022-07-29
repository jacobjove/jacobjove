import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";

@TypeGraphQL.InputType("GoalCreateWithoutHabitInput", {
  isAbstract: true,
})
export class GoalCreateWithoutHabitInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => GoalCreateNestedOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalCreateNestedOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalCreateNestedManyWithoutGoalInput, { nullable: true })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
