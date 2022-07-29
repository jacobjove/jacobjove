import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateInput } from "../../../inputs/RoutineHabitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRoutineHabitArgs {
  @TypeGraphQL.Field(() => RoutineHabitCreateInput, { nullable: false })
  data!: RoutineHabitCreateInput;
}
