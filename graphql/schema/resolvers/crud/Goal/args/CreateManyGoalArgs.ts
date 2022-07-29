import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyInput } from "../../../inputs/GoalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGoalArgs {
  @TypeGraphQL.Field((_type) => [GoalCreateManyInput], { nullable: false })
  data!: GoalCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
