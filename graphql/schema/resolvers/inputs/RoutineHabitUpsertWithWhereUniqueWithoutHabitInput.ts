import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitUpdateWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineHabitUpdateWithoutHabitInput, { nullable: false })
  update!: RoutineHabitUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateWithoutHabitInput, { nullable: false })
  create!: RoutineHabitCreateWithoutHabitInput;
}
