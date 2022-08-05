import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitUpdateWithoutRoutineInput } from "../inputs/RoutineHabitUpdateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput", { isAbstract: true })
export class RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput {
  @TypeGraphQL.Field(() => RoutineHabitWhereUniqueInput, { nullable: false })
  where!: RoutineHabitWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineHabitUpdateWithoutRoutineInput, { nullable: false })
  data!: RoutineHabitUpdateWithoutRoutineInput;
}
