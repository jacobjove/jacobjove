import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateWithoutHabitInput } from "../inputs/GoalUpdateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateWithWhereUniqueWithoutHabitInput", { isAbstract: true })
export class GoalUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalUpdateWithoutHabitInput, { nullable: false })
  data!: GoalUpdateWithoutHabitInput;
}
