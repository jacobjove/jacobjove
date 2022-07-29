import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitUpdateWithoutRoutineInput } from "../inputs/RoutineHabitUpdateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateWithoutRoutineInput, { nullable: false })
  update!: RoutineHabitUpdateWithoutRoutineInput;

  @TypeGraphQL.Field(() => RoutineHabitCreateWithoutRoutineInput, { nullable: false })
  create!: RoutineHabitCreateWithoutRoutineInput;
}
