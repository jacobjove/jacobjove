import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RoutineHabitMaxAggregate", {
  isAbstract: true,
})
export class RoutineHabitMaxAggregate {
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

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;
}
