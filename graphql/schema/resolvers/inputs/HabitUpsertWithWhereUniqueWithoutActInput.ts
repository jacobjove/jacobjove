import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitUpdateWithoutActInput } from "../inputs/HabitUpdateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class HabitUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutActInput, {
    nullable: false,
  })
  update!: HabitUpdateWithoutActInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutActInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutActInput;
}
