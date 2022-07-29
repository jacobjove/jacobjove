import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGoalArgs {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;
}
