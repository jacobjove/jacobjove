import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalUpdateWithoutHabitInput } from "../inputs/GoalUpdateWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpsertWithWhereUniqueWithoutHabitInput", { isAbstract: true })
export class GoalUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: false })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field(() => GoalUpdateWithoutHabitInput, { nullable: false })
  update!: GoalUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => GoalCreateWithoutHabitInput, { nullable: false })
  create!: GoalCreateWithoutHabitInput;
}
