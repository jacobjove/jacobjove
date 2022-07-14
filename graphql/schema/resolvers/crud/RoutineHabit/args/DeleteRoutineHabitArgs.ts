import * as TypeGraphQL from "type-graphql";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineHabitWhereUniqueInput;
}
