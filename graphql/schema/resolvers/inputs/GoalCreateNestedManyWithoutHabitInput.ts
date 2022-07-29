import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyHabitInputEnvelope } from "../inputs/GoalCreateManyHabitInputEnvelope";
import { GoalCreateOrConnectWithoutHabitInput } from "../inputs/GoalCreateOrConnectWithoutHabitInput";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class GoalCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [GoalCreateWithoutHabitInput], { nullable: true })
  create?: GoalCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [GoalCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => GoalCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: GoalCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [GoalWhereUniqueInput], { nullable: true })
  connect?: GoalWhereUniqueInput[] | undefined;
}
