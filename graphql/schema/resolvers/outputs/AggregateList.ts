import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListAvgAggregate } from "../outputs/ListAvgAggregate";
import { ListCountAggregate } from "../outputs/ListCountAggregate";
import { ListMaxAggregate } from "../outputs/ListMaxAggregate";
import { ListMinAggregate } from "../outputs/ListMinAggregate";
import { ListSumAggregate } from "../outputs/ListSumAggregate";

@TypeGraphQL.ObjectType("AggregateList", {
  isAbstract: true,
})
export class AggregateList {
  @TypeGraphQL.Field((_type) => ListCountAggregate, { nullable: true })
  _count!: ListCountAggregate | null;

  @TypeGraphQL.Field((_type) => ListAvgAggregate, { nullable: true })
  _avg!: ListAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ListSumAggregate, { nullable: true })
  _sum!: ListSumAggregate | null;

  @TypeGraphQL.Field((_type) => ListMinAggregate, { nullable: true })
  _min!: ListMinAggregate | null;

  @TypeGraphQL.Field((_type) => ListMaxAggregate, { nullable: true })
  _max!: ListMaxAggregate | null;
}
