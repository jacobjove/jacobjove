import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutSchedulesInput } from "../inputs/HabitCreateWithoutSchedulesInput";
import { HabitUpdateWithoutSchedulesInput } from "../inputs/HabitUpdateWithoutSchedulesInput";

@TypeGraphQL.InputType("HabitUpsertWithoutSchedulesInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutSchedulesInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutSchedulesInput, { nullable: false })
  update!: HabitUpdateWithoutSchedulesInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutSchedulesInput, { nullable: false })
  create!: HabitCreateWithoutSchedulesInput;
}
