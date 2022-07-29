import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateWithoutHabitInput } from "../inputs/GoalUpdateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalUpdateWithoutHabitInput, { nullable: false })
  data!: GoalUpdateWithoutHabitInput;
}
