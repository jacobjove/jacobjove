import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitAvgAggregate } from "../outputs/RoutineHabitAvgAggregate";
import { RoutineHabitCountAggregate } from "../outputs/RoutineHabitCountAggregate";
import { RoutineHabitMaxAggregate } from "../outputs/RoutineHabitMaxAggregate";
import { RoutineHabitMinAggregate } from "../outputs/RoutineHabitMinAggregate";
import { RoutineHabitSumAggregate } from "../outputs/RoutineHabitSumAggregate";

@TypeGraphQL.ObjectType("AggregateRoutineHabit", {
  isAbstract: true,
})
export class AggregateRoutineHabit {
  @TypeGraphQL.Field(() => RoutineHabitCountAggregate, { nullable: true })
  _count!: RoutineHabitCountAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitAvgAggregate, { nullable: true })
  _avg!: RoutineHabitAvgAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitSumAggregate, { nullable: true })
  _sum!: RoutineHabitSumAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitMinAggregate, { nullable: true })
  _min!: RoutineHabitMinAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitMaxAggregate, { nullable: true })
  _max!: RoutineHabitMaxAggregate | null;
}
