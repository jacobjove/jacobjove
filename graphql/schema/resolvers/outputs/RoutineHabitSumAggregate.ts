import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("RoutineHabitSumAggregate", {
  isAbstract: true,
})
export class RoutineHabitSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  routineId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  position!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  durationInMinutes!: number | null;
}
