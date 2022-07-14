import * as TypeGraphQL from "type-graphql";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateInput", {
  isAbstract: true,
})
export class GoalCreateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  quantity!: number;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutGoalsInput, {
    nullable: false,
  })
  habit!: HabitCreateNestedOneWithoutGoalsInput;

  @TypeGraphQL.Field((_type) => GoalCreateNestedOneWithoutMilestonesInput, {
    nullable: true,
  })
  goal?: GoalCreateNestedOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateNestedManyWithoutGoalInput, {
    nullable: true,
  })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
