import * as TypeGraphQL from "type-graphql";
import { RoutineHabitRoutineIdPositionCompoundUniqueInput } from "../inputs/RoutineHabitRoutineIdPositionCompoundUniqueInput";

@TypeGraphQL.InputType("RoutineHabitWhereUniqueInput", {
  isAbstract: true,
})
export class RoutineHabitWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitRoutineIdPositionCompoundUniqueInput, {
    nullable: true,
  })
  routineId_position?: RoutineHabitRoutineIdPositionCompoundUniqueInput | undefined;
}
