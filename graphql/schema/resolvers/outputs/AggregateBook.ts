import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";

@TypeGraphQL.ObjectType("AggregateBook", {
  isAbstract: true,
})
export class AggregateBook {
  @TypeGraphQL.Field(() => BookCountAggregate, { nullable: true })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(() => BookAvgAggregate, { nullable: true })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field(() => BookSumAggregate, { nullable: true })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field(() => BookMinAggregate, { nullable: true })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(() => BookMaxAggregate, { nullable: true })
  _max!: BookMaxAggregate | null;
}
