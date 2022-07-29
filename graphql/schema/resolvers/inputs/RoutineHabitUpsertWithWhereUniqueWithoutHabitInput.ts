import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitUpdateWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateWithoutHabitInput, { nullable: false })
  update!: RoutineHabitUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => RoutineHabitCreateWithoutHabitInput, { nullable: false })
  create!: RoutineHabitCreateWithoutHabitInput;
}
