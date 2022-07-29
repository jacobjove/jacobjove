import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitUpdateWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateWithoutHabitInput, { nullable: false })
  data!: RoutineHabitUpdateWithoutHabitInput;
}
