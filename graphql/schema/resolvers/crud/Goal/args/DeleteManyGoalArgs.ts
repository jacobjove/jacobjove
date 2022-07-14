import * as TypeGraphQL from "type-graphql";
import { GoalWhereInput } from "../../../inputs/GoalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGoalArgs {
  @TypeGraphQL.Field((_type) => GoalWhereInput, {
    nullable: true,
  })
  where?: GoalWhereInput | undefined;
}
