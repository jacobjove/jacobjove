import * as TypeGraphQL from "type-graphql";
import { HabitUpdateWithoutActInput } from "../inputs/HabitUpdateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class HabitUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutActInput, {
    nullable: false,
  })
  data!: HabitUpdateWithoutActInput;
}
