import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitAvgAggregate } from "../outputs/HabitAvgAggregate";
import { HabitCountAggregate } from "../outputs/HabitCountAggregate";
import { HabitMaxAggregate } from "../outputs/HabitMaxAggregate";
import { HabitMinAggregate } from "../outputs/HabitMinAggregate";
import { HabitSumAggregate } from "../outputs/HabitSumAggregate";

@TypeGraphQL.ObjectType("AggregateHabit", {
  isAbstract: true,
})
export class AggregateHabit {
  @TypeGraphQL.Field((_type) => HabitCountAggregate, { nullable: true })
  _count!: HabitCountAggregate | null;

  @TypeGraphQL.Field((_type) => HabitAvgAggregate, { nullable: true })
  _avg!: HabitAvgAggregate | null;

  @TypeGraphQL.Field((_type) => HabitSumAggregate, { nullable: true })
  _sum!: HabitSumAggregate | null;

  @TypeGraphQL.Field((_type) => HabitMinAggregate, { nullable: true })
  _min!: HabitMinAggregate | null;

  @TypeGraphQL.Field((_type) => HabitMaxAggregate, { nullable: true })
  _max!: HabitMaxAggregate | null;
}
