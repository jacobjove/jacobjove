import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateWithoutHabitInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutGoalInput, { nullable: true })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
