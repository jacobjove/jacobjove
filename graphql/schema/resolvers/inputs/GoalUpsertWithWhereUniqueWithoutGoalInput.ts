import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalUpdateWithoutGoalInput } from "../inputs/GoalUpdateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpsertWithWhereUniqueWithoutGoalInput", {
  isAbstract: true,
})
export class GoalUpsertWithWhereUniqueWithoutGoalInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalUpdateWithoutGoalInput, { nullable: false })
  update!: GoalUpdateWithoutGoalInput;

  @TypeGraphQL.Field(() => GoalCreateWithoutGoalInput, { nullable: false })
  create!: GoalCreateWithoutGoalInput;
}
