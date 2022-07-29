import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateInput } from "../../../inputs/HabitUpdateInput";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateHabitArgs {
  @TypeGraphQL.Field((_type) => HabitUpdateInput, { nullable: false })
  data!: HabitUpdateInput;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;
}
