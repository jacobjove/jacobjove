import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitUpdateWithoutTasksInput } from "../inputs/HabitUpdateWithoutTasksInput";

@TypeGraphQL.InputType("HabitUpsertWithoutTasksInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutTasksInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutTasksInput, { nullable: false })
  update!: HabitUpdateWithoutTasksInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutTasksInput, { nullable: false })
  create!: HabitCreateWithoutTasksInput;
}
