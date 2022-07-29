import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateWithoutGoalInput", {
  isAbstract: true,
})
export class GoalCreateWithoutGoalInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutGoalsInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutGoalsInput;

  @TypeGraphQL.Field((_type) => GoalCreateNestedManyWithoutGoalInput, { nullable: true })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
