import * as TypeGraphQL from "type-graphql";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalCreateWithoutMilestonesInput {
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
}
