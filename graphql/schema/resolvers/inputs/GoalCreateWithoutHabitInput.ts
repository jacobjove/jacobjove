import * as TypeGraphQL from "type-graphql";
import { GoalCreateNestedManyWithoutGoalInput } from "../inputs/GoalCreateNestedManyWithoutGoalInput";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";

@TypeGraphQL.InputType("GoalCreateWithoutHabitInput", {
  isAbstract: true,
})
export class GoalCreateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  quantity!: number;

  @TypeGraphQL.Field((_type) => GoalCreateNestedOneWithoutMilestonesInput, {
    nullable: true,
  })
  goal?: GoalCreateNestedOneWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateNestedManyWithoutGoalInput, {
    nullable: true,
  })
  milestones?: GoalCreateNestedManyWithoutGoalInput | undefined;
}
