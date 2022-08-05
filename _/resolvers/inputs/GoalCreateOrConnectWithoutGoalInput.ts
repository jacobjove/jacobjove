import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutGoalInput", { isAbstract: true })
export class GoalCreateOrConnectWithoutGoalInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalCreateWithoutGoalInput, { nullable: false })
  create!: GoalCreateWithoutGoalInput;
}
