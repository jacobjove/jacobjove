import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitUpdateWithoutUserInput } from "../inputs/HabitUpdateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: HabitUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutUserInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutUserInput;
}
