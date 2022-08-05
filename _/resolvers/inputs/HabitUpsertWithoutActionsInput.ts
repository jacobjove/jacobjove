import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitUpdateWithoutActionsInput } from "../inputs/HabitUpdateWithoutActionsInput";

@TypeGraphQL.InputType("HabitUpsertWithoutActionsInput", { isAbstract: true })
export class HabitUpsertWithoutActionsInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutActionsInput, { nullable: false })
  update!: HabitUpdateWithoutActionsInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutActionsInput, { nullable: false })
  create!: HabitCreateWithoutActionsInput;
}
