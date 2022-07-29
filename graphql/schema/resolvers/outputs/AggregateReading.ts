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
  @TypeGraphQL.Field(() => ReadingCountAggregate, { nullable: true })
  _count!: ReadingCountAggregate | null;

  @TypeGraphQL.Field(() => ReadingAvgAggregate, { nullable: true })
  _avg!: ReadingAvgAggregate | null;

  @TypeGraphQL.Field(() => ReadingSumAggregate, { nullable: true })
  _sum!: ReadingSumAggregate | null;

  @TypeGraphQL.Field(() => ReadingMinAggregate, { nullable: true })
  _min!: ReadingMinAggregate | null;

  @TypeGraphQL.Field(() => ReadingMaxAggregate, { nullable: true })
  _max!: ReadingMaxAggregate | null;
}
