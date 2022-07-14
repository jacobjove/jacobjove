import * as TypeGraphQL from "type-graphql";
import { GoalUpdateManyWithoutGoalInput } from "../inputs/GoalUpdateManyWithoutGoalInput";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpdateOneWithoutMilestonesInput, {
    nullable: true,
  })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpdateManyWithoutGoalInput, {
    nullable: true,
  })
  milestones?: GoalUpdateManyWithoutGoalInput | undefined;
}
