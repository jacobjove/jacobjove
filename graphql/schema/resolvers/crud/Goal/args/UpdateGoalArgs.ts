import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateInput } from "../../../inputs/GoalUpdateInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGoalArgs {
  @TypeGraphQL.Field(() => GoalUpdateInput, { nullable: false })
  data!: GoalUpdateInput;

  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;
}
