import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";
import { GoalUpdateInput } from "../../../inputs/GoalUpdateInput";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGoalArgs {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalCreateInput, { nullable: false })
  create!: GoalCreateInput;

  @TypeGraphQL.Field(() => GoalUpdateInput, { nullable: false })
  update!: GoalUpdateInput;
}
