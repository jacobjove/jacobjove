import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateInput", {
  isAbstract: true,
})
export class GoalUpdateInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutGoalsInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutGoalInput, { nullable: true })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
