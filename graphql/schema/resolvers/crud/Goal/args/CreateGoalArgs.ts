import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateInput } from "../../../inputs/GoalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateGoalArgs {
  @TypeGraphQL.Field((_type) => GoalCreateInput, { nullable: false })
  data!: GoalCreateInput;
}
