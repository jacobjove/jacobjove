import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateInput } from "../../../inputs/HabitCreateInput";
import { HabitUpdateInput } from "../../../inputs/HabitUpdateInput";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertHabitArgs {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateInput, { nullable: false })
  create!: HabitCreateInput;

  @TypeGraphQL.Field(() => HabitUpdateInput, { nullable: false })
  update!: HabitUpdateInput;
}
