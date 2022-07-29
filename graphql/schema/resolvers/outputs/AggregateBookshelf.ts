import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfAvgAggregate } from "../outputs/BookshelfAvgAggregate";
import { BookshelfCountAggregate } from "../outputs/BookshelfCountAggregate";
import { BookshelfMaxAggregate } from "../outputs/BookshelfMaxAggregate";
import { BookshelfMinAggregate } from "../outputs/BookshelfMinAggregate";
import { BookshelfSumAggregate } from "../outputs/BookshelfSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookshelf", {
  isAbstract: true,
})
export class AggregateBookshelf {
  @TypeGraphQL.Field(() => BookshelfCountAggregate, { nullable: true })
  _count!: BookshelfCountAggregate | null;

  @TypeGraphQL.Field(() => BookshelfAvgAggregate, { nullable: true })
  _avg!: BookshelfAvgAggregate | null;

  @TypeGraphQL.Field(() => BookshelfSumAggregate, { nullable: true })
  _sum!: BookshelfSumAggregate | null;

  @TypeGraphQL.Field(() => BookshelfMinAggregate, { nullable: true })
  _min!: BookshelfMinAggregate | null;

  @TypeGraphQL.Field(() => BookshelfMaxAggregate, { nullable: true })
  _max!: BookshelfMaxAggregate | null;
}
