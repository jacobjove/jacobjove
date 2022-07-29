import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalUpdateManyMutationInput } from "../../../inputs/GoalUpdateManyMutationInput";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGoalArgs {
  @TypeGraphQL.Field(() => GoalUpdateManyMutationInput, { nullable: false })
  data!: GoalUpdateManyMutationInput;

  @TypeGraphQL.Field(() => GoalWhereInput, { nullable: true })
  where?: GoalWhereInput | undefined;
}
