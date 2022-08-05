import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";

@TypeGraphQL.InputType("GoalUpdateInput", { isAbstract: true })
export class GoalUpdateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutGoalsInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutGoalInput, { nullable: true })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
