import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitUpdateWithoutActInput } from "../inputs/HabitUpdateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class HabitUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitUpdateWithoutActInput, { nullable: false })
  update!: HabitUpdateWithoutActInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutActInput, { nullable: false })
  create!: HabitCreateWithoutActInput;
}
