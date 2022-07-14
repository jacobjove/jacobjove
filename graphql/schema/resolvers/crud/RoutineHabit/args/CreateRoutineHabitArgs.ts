import * as TypeGraphQL from "type-graphql";
import { RoutineHabitCreateInput } from "../../../inputs/RoutineHabitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitCreateInput, {
    nullable: false,
  })
  data!: RoutineHabitCreateInput;
}
