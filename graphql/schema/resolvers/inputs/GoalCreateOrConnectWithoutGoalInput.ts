import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutGoalInput", {
  isAbstract: true,
})
export class GoalCreateOrConnectWithoutGoalInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutGoalInput, { nullable: false })
  create!: GoalCreateWithoutGoalInput;
}
