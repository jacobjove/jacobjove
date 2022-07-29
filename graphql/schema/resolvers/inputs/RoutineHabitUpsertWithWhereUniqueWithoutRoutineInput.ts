import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitUpdateWithoutRoutineInput } from "../inputs/RoutineHabitUpdateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput {
  @TypeGraphQL.Field((_type) => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineHabitUpdateWithoutRoutineInput, { nullable: false })
  update!: RoutineHabitUpdateWithoutRoutineInput;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateWithoutRoutineInput, { nullable: false })
  create!: RoutineHabitCreateWithoutRoutineInput;
}
