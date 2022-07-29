import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGoalArgs {
  @TypeGraphQL.Field(() => GoalWhereInput, { nullable: true })
  where?: GoalWhereInput | undefined;
}
