import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteHabitArgs {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;
}
