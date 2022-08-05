import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutHabitInput", { isAbstract: true })
export class GoalCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalCreateWithoutHabitInput, { nullable: false })
  create!: GoalCreateWithoutHabitInput;
}
