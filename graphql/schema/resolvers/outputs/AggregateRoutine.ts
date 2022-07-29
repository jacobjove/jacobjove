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
  @TypeGraphQL.Field(() => RoutineCountAggregate, { nullable: true })
  _count!: RoutineCountAggregate | null;

  @TypeGraphQL.Field(() => RoutineAvgAggregate, { nullable: true })
  _avg!: RoutineAvgAggregate | null;

  @TypeGraphQL.Field(() => RoutineSumAggregate, { nullable: true })
  _sum!: RoutineSumAggregate | null;

  @TypeGraphQL.Field(() => RoutineMinAggregate, { nullable: true })
  _min!: RoutineMinAggregate | null;

  @TypeGraphQL.Field(() => RoutineMaxAggregate, { nullable: true })
  _max!: RoutineMaxAggregate | null;
}
