import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyGoalInputEnvelope } from "../inputs/GoalCreateManyGoalInputEnvelope";
import { GoalCreateOrConnectWithoutGoalInput } from "../inputs/GoalCreateOrConnectWithoutGoalInput";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedManyWithoutGoalInput", {
  isAbstract: true,
})
export class GoalCreateNestedManyWithoutGoalInput {
  @TypeGraphQL.Field(() => [GoalCreateWithoutGoalInput], { nullable: true })
  create?: GoalCreateWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalCreateOrConnectWithoutGoalInput], { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field(() => GoalCreateManyGoalInputEnvelope, { nullable: true })
  createMany?: GoalCreateManyGoalInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [GoalWhereUniqueInput], { nullable: true })
  connect?: GoalWhereUniqueInput[] | undefined;
}
