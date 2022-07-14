import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutGoalsInput } from "../inputs/HabitCreateWithoutGoalsInput";
import { HabitUpdateWithoutGoalsInput } from "../inputs/HabitUpdateWithoutGoalsInput";

@TypeGraphQL.InputType("HabitUpsertWithoutGoalsInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutGoalsInput {
  @TypeGraphQL.Field((_type) => HabitUpdateWithoutGoalsInput, {
    nullable: false,
  })
  update!: HabitUpdateWithoutGoalsInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutGoalsInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutGoalsInput;
}
