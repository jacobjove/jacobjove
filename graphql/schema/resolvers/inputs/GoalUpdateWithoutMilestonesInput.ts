import * as TypeGraphQL from "type-graphql";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalUpdateWithoutMilestonesInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutGoalsInput, {
    nullable: true,
  })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpdateOneWithoutMilestonesInput, {
    nullable: true,
  })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;
}
