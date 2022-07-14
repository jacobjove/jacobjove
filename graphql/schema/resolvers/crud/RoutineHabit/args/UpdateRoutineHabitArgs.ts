import * as TypeGraphQL from "type-graphql";
import { RoutineHabitUpdateInput } from "../../../inputs/RoutineHabitUpdateInput";
import { RoutineHabitWhereUniqueInput } from "../../../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitUpdateInput, {
    nullable: false,
  })
  data!: RoutineHabitUpdateInput;

  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineHabitWhereUniqueInput;
}
