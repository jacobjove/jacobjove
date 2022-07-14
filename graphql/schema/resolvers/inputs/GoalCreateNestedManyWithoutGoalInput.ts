import * as TypeGraphQL from "type-graphql";
import { GoalCreateManyGoalInputEnvelope } from "../inputs/GoalCreateManyGoalInputEnvelope";
import { GoalCreateOrConnectWithoutGoalInput } from "../inputs/GoalCreateOrConnectWithoutGoalInput";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedManyWithoutGoalInput", {
  isAbstract: true,
})
export class GoalCreateNestedManyWithoutGoalInput {
  @TypeGraphQL.Field((_type) => [GoalCreateWithoutGoalInput], {
    nullable: true,
  })
  create?: GoalCreateWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalCreateOrConnectWithoutGoalInput], {
    nullable: true,
  })
  connectOrCreate?: GoalCreateOrConnectWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateManyGoalInputEnvelope, {
    nullable: true,
  })
  createMany?: GoalCreateManyGoalInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], {
    nullable: true,
  })
  connect?: GoalWhereUniqueInput[] | undefined;
}
