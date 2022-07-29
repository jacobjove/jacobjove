import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineHabitAvgAggregate", {
  isAbstract: true,
})
export class RoutineHabitAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  routineId!: number | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  position!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  durationInMinutes!: number | null;
}
