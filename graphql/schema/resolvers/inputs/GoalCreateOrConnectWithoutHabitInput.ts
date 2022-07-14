import * as TypeGraphQL from "type-graphql";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class GoalCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, {
    nullable: false,
  })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutHabitInput, {
    nullable: false,
  })
  create!: GoalCreateWithoutHabitInput;
}
