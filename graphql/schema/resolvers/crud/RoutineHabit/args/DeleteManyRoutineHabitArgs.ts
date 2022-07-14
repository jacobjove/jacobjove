import * as TypeGraphQL from "type-graphql";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  where?: RoutineHabitWhereInput | undefined;
}
