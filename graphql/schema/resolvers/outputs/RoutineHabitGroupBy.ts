import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { RoutineHabitAvgAggregate } from "../outputs/RoutineHabitAvgAggregate";
import { RoutineHabitCountAggregate } from "../outputs/RoutineHabitCountAggregate";
import { RoutineHabitMaxAggregate } from "../outputs/RoutineHabitMaxAggregate";
import { RoutineHabitMinAggregate } from "../outputs/RoutineHabitMinAggregate";
import { RoutineHabitSumAggregate } from "../outputs/RoutineHabitSumAggregate";

@TypeGraphQL.ObjectType("RoutineHabitGroupBy", {
  isAbstract: true,
})
export class RoutineHabitGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  routineId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  position!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  durationInMinutes!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => RoutineHabitCountAggregate, {
    nullable: true,
  })
  _count!: RoutineHabitCountAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineHabitAvgAggregate, {
    nullable: true,
  })
  _avg!: RoutineHabitAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineHabitSumAggregate, {
    nullable: true,
  })
  _sum!: RoutineHabitSumAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineHabitMinAggregate, {
    nullable: true,
  })
  _min!: RoutineHabitMinAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineHabitMaxAggregate, {
    nullable: true,
  })
  _max!: RoutineHabitMaxAggregate | null;
}
