import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateWithoutActInput } from "../inputs/HabitUpdateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class HabitUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitUpdateWithoutActInput, { nullable: false })
  data!: HabitUpdateWithoutActInput;
}
