import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RoutineHabitRoutineIdPositionCompoundUniqueInput", {
  isAbstract: true,
})
export class RoutineHabitRoutineIdPositionCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  routineId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;
}
