import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateWithoutUserInput } from "../inputs/HabitUpdateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class HabitUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitUpdateWithoutUserInput, { nullable: false })
  data!: HabitUpdateWithoutUserInput;
}
