import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalUpdateWithoutMilestonesInput } from "../inputs/GoalUpdateWithoutMilestonesInput";

@TypeGraphQL.InputType("GoalUpsertWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalUpsertWithoutMilestonesInput {
  @TypeGraphQL.Field((_type) => GoalUpdateWithoutMilestonesInput, { nullable: false })
  update!: GoalUpdateWithoutMilestonesInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutMilestonesInput, { nullable: false })
  create!: GoalCreateWithoutMilestonesInput;
}
