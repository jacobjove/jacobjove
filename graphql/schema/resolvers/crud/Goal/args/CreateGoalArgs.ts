import * as TypeGraphQL from "type-graphql";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGoalArgs {
  @TypeGraphQL.Field((_type) => GoalCreateInput, {
    nullable: false,
  })
  data!: GoalCreateInput;
}
