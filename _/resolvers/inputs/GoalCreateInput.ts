import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateInput", { isAbstract: true })
export class GoalCreateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutGoalsInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutGoalsInput;

  @TypeGraphQL.Field(() => GoalCreateNestedOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalCreateNestedOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalCreateNestedManyWithoutGoalInput, { nullable: true })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
