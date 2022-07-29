import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalWhereUniqueInput } from "../../../inputs/GoalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGoalArgs {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;
}
