import * as TypeGraphQL from "type-graphql";
import { RoutineHabitAvgAggregate } from "../outputs/RoutineHabitAvgAggregate";
import { RoutineHabitCountAggregate } from "../outputs/RoutineHabitCountAggregate";
import { RoutineHabitMaxAggregate } from "../outputs/RoutineHabitMaxAggregate";
import { RoutineHabitMinAggregate } from "../outputs/RoutineHabitMinAggregate";
import { RoutineHabitSumAggregate } from "../outputs/RoutineHabitSumAggregate";

@TypeGraphQL.ObjectType("AggregateRoutineHabit", {
  isAbstract: true,
})
export class AggregateRoutineHabit {
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
