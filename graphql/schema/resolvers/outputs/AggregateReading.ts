import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingAvgAggregate } from "../outputs/ReadingAvgAggregate";
import { ReadingCountAggregate } from "../outputs/ReadingCountAggregate";
import { ReadingMaxAggregate } from "../outputs/ReadingMaxAggregate";
import { ReadingMinAggregate } from "../outputs/ReadingMinAggregate";
import { ReadingSumAggregate } from "../outputs/ReadingSumAggregate";

@TypeGraphQL.ObjectType("AggregateReading", {
  isAbstract: true,
})
export class AggregateReading {
  @TypeGraphQL.Field((_type) => ReadingCountAggregate, { nullable: true })
  _count!: ReadingCountAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingAvgAggregate, { nullable: true })
  _avg!: ReadingAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingSumAggregate, { nullable: true })
  _sum!: ReadingSumAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingMinAggregate, { nullable: true })
  _min!: ReadingMinAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingMaxAggregate, { nullable: true })
  _max!: ReadingMaxAggregate | null;
}
