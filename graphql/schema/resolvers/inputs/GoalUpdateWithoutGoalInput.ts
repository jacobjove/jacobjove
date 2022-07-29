import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutGoalInput", {
  isAbstract: true,
})
export class GoalUpdateWithoutGoalInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutGoalsInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutGoalInput, { nullable: true })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
