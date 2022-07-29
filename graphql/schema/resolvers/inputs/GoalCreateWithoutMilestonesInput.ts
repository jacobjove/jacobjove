import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateNestedOneWithoutMilestonesInput } from "../inputs/GoalCreateNestedOneWithoutMilestonesInput";
import { HabitCreateNestedOneWithoutGoalsInput } from "../inputs/HabitCreateNestedOneWithoutGoalsInput";

@TypeGraphQL.InputType("GoalCreateWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalCreateWithoutMilestonesInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutGoalsInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutGoalsInput;

  @TypeGraphQL.Field(() => GoalCreateNestedOneWithoutMilestonesInput, { nullable: true })
  goal?: GoalCreateNestedOneWithoutMilestonesInput | undefined;
}
