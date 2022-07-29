import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRoutineHabitArgs {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;
}
