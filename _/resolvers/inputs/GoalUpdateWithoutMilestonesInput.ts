import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateOneWithoutMilestonesInput } from "../inputs/GoalUpdateOneWithoutMilestonesInput";
import { HabitUpdateOneRequiredWithoutGoalsInput } from "../inputs/HabitUpdateOneRequiredWithoutGoalsInput";

@TypeGraphQL.InputType("GoalUpdateWithoutMilestonesInput", { isAbstract: true })
export class GoalUpdateWithoutMilestonesInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutGoalsInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutGoalsInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalUpdateOneWithoutMilestonesInput | undefined;
}
