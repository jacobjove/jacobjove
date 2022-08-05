import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitUpdateWithoutGoalsInput } from "../inputs/HabitUpdateWithoutGoalsInput";

@TypeGraphQL.InputType("HabitUpsertWithoutGoalsInput", { isAbstract: true })
export class HabitUpsertWithoutGoalsInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutGoalsInput, { nullable: false })
  update!: HabitUpdateWithoutGoalsInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutGoalsInput, { nullable: false })
  create!: HabitCreateWithoutGoalsInput;
}
