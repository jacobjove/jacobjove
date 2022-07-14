import * as TypeGraphQL from "type-graphql";
import { GoalUpdateManyMutationInput } from "../../../inputs/GoalUpdateManyMutationInput";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGoalArgs {
  @TypeGraphQL.Field((_type) => GoalUpdateManyMutationInput, {
    nullable: false,
  })
  data!: GoalUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => GoalWhereInput, {
    nullable: true,
  })
  where?: GoalWhereInput | undefined;
}
