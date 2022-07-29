import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateWithoutGoalInput", {
  isAbstract: true,
})
export class GoalCreateWithoutGoalInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutGoalsInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutGoalsInput;

  @TypeGraphQL.Field(() => GoalCreateNestedManyWithoutGoalInput, { nullable: true })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
