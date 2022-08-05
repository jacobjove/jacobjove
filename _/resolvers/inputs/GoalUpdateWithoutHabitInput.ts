import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";

@TypeGraphQL.InputType("GoalUpdateWithoutHabitInput", { isAbstract: true })
export class GoalUpdateWithoutHabitInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutGoalInput, { nullable: true })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
