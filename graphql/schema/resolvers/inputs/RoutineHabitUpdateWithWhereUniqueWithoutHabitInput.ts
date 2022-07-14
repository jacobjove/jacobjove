import * as TypeGraphQL from "type-graphql";
import { RoutineHabitUpdateWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineHabitUpdateWithoutHabitInput, {
    nullable: false,
  })
  data!: RoutineHabitUpdateWithoutHabitInput;
}
