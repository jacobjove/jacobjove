import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActAvgAggregate } from "../outputs/ActAvgAggregate";
import { ActCountAggregate } from "../outputs/ActCountAggregate";
import { ActMaxAggregate } from "../outputs/ActMaxAggregate";
import { ActMinAggregate } from "../outputs/ActMinAggregate";
import { ActSumAggregate } from "../outputs/ActSumAggregate";

@TypeGraphQL.ObjectType("AggregateAct", {
  isAbstract: true,
})
export class AggregateAct {
  @TypeGraphQL.Field((_type) => ActCountAggregate, { nullable: true })
  _count!: ActCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActAvgAggregate, { nullable: true })
  _avg!: ActAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActSumAggregate, { nullable: true })
  _sum!: ActSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActMinAggregate, { nullable: true })
  _min!: ActMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActMaxAggregate, { nullable: true })
  _max!: ActMaxAggregate | null;
}
