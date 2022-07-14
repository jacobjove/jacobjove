import * as TypeGraphQL from "type-graphql";
import { HabitCreateInput } from "../../../inputs/HabitCreateInput";
import { HabitUpdateInput } from "../../../inputs/HabitUpdateInput";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHabitArgs {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateInput, {
    nullable: false,
  })
  create!: HabitCreateInput;

  @TypeGraphQL.Field((_type) => HabitUpdateInput, {
    nullable: false,
  })
  update!: HabitUpdateInput;
}
