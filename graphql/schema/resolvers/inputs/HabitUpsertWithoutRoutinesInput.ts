import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutRoutinesInput } from "../inputs/HabitCreateWithoutRoutinesInput";
import { HabitUpdateWithoutRoutinesInput } from "../inputs/HabitUpdateWithoutRoutinesInput";

@TypeGraphQL.InputType("HabitUpsertWithoutRoutinesInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutRoutinesInput {
  @TypeGraphQL.Field((_type) => HabitUpdateWithoutRoutinesInput, { nullable: false })
  update!: HabitUpdateWithoutRoutinesInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutRoutinesInput, { nullable: false })
  create!: HabitCreateWithoutRoutinesInput;
}
