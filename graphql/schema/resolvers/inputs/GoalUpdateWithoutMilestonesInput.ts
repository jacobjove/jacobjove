import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalUpdateWithoutMilestonesInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutGoalsInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;
}
