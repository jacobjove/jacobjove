import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateInput } from "../../../inputs/HabitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateHabitArgs {
  @TypeGraphQL.Field(() => HabitCreateInput, { nullable: false })
  data!: HabitCreateInput;
}
