import * as TypeGraphQL from "type-graphql";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHabitArgs {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;
}
