import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateWithoutUserInput } from "../inputs/HabitUpdateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutUserInput, { nullable: false })
  data!: HabitUpdateWithoutUserInput;
}
