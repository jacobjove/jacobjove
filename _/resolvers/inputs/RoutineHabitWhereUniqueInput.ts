import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitRoutineIdPositionCompoundUniqueInput } from "../inputs/RoutineHabitRoutineIdPositionCompoundUniqueInput";

@TypeGraphQL.InputType("RoutineHabitWhereUniqueInput", { isAbstract: true })
export class RoutineHabitWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => RoutineHabitRoutineIdPositionCompoundUniqueInput, {
    nullable: true,
  })
  routineId_position?: RoutineHabitRoutineIdPositionCompoundUniqueInput | undefined;
}
