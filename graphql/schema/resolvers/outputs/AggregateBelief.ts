import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefAvgAggregate } from "../outputs/BeliefAvgAggregate";
import { BeliefCountAggregate } from "../outputs/BeliefCountAggregate";
import { BeliefMaxAggregate } from "../outputs/BeliefMaxAggregate";
import { BeliefMinAggregate } from "../outputs/BeliefMinAggregate";
import { BeliefSumAggregate } from "../outputs/BeliefSumAggregate";

@TypeGraphQL.ObjectType("AggregateBelief", {
  isAbstract: true,
})
export class AggregateBelief {
  @TypeGraphQL.Field((_type) => BeliefCountAggregate, { nullable: true })
  _count!: BeliefCountAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefAvgAggregate, { nullable: true })
  _avg!: BeliefAvgAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefSumAggregate, { nullable: true })
  _sum!: BeliefSumAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefMinAggregate, { nullable: true })
  _min!: BeliefMinAggregate | null;

  @TypeGraphQL.Field((_type) => BeliefMaxAggregate, { nullable: true })
  _max!: BeliefMaxAggregate | null;
}
