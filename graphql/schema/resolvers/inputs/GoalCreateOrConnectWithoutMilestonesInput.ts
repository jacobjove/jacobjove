import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalCreateOrConnectWithoutMilestonesInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutMilestonesInput, { nullable: false })
  create!: GoalCreateWithoutMilestonesInput;
}
