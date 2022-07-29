import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitUpdateWithoutUserInput } from "../inputs/HabitUpdateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitUpdateWithoutUserInput, { nullable: false })
  update!: HabitUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutUserInput, { nullable: false })
  create!: HabitCreateWithoutUserInput;
}
