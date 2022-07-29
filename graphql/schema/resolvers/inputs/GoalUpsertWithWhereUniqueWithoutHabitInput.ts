import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalUpdateWithoutHabitInput } from "../inputs/GoalUpdateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalUpdateWithoutHabitInput, { nullable: false })
  update!: GoalUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutHabitInput, { nullable: false })
  create!: GoalCreateWithoutHabitInput;
}
