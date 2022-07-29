import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueAvgAggregate } from "../outputs/ValueAvgAggregate";
import { ValueCountAggregate } from "../outputs/ValueCountAggregate";
import { ValueMaxAggregate } from "../outputs/ValueMaxAggregate";
import { ValueMinAggregate } from "../outputs/ValueMinAggregate";
import { ValueSumAggregate } from "../outputs/ValueSumAggregate";

@TypeGraphQL.ObjectType("AggregateValue", {
  isAbstract: true,
})
export class AggregateValue {
  @TypeGraphQL.Field((_type) => ValueCountAggregate, { nullable: true })
  _count!: ValueCountAggregate | null;

  @TypeGraphQL.Field((_type) => ValueAvgAggregate, { nullable: true })
  _avg!: ValueAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ValueSumAggregate, { nullable: true })
  _sum!: ValueSumAggregate | null;

  @TypeGraphQL.Field((_type) => ValueMinAggregate, { nullable: true })
  _min!: ValueMinAggregate | null;

  @TypeGraphQL.Field((_type) => ValueMaxAggregate, { nullable: true })
  _max!: ValueMaxAggregate | null;
}
