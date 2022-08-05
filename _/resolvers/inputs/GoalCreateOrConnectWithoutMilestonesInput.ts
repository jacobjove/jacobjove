import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutMilestonesInput", { isAbstract: true })
export class GoalCreateOrConnectWithoutMilestonesInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalCreateWithoutMilestonesInput, { nullable: false })
  create!: GoalCreateWithoutMilestonesInput;
}
