import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateWithoutGoalInput } from "../inputs/GoalUpdateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateWithWhereUniqueWithoutGoalInput", { isAbstract: true })
export class GoalUpdateWithWhereUniqueWithoutGoalInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalUpdateWithoutGoalInput, { nullable: false })
  data!: GoalUpdateWithoutGoalInput;
}
