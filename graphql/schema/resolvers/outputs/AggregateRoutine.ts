import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineAvgAggregate } from "../outputs/RoutineAvgAggregate";
import { RoutineCountAggregate } from "../outputs/RoutineCountAggregate";
import { RoutineMaxAggregate } from "../outputs/RoutineMaxAggregate";
import { RoutineMinAggregate } from "../outputs/RoutineMinAggregate";
import { RoutineSumAggregate } from "../outputs/RoutineSumAggregate";

@TypeGraphQL.ObjectType("AggregateRoutine", {
  isAbstract: true,
})
export class AggregateRoutine {
  @TypeGraphQL.Field((_type) => RoutineCountAggregate, { nullable: true })
  _count!: RoutineCountAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineAvgAggregate, { nullable: true })
  _avg!: RoutineAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineSumAggregate, { nullable: true })
  _sum!: RoutineSumAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineMinAggregate, { nullable: true })
  _min!: RoutineMinAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineMaxAggregate, { nullable: true })
  _max!: RoutineMaxAggregate | null;
}
