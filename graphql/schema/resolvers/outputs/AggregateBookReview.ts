import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewAvgAggregate } from "../outputs/BookReviewAvgAggregate";
import { BookReviewCountAggregate } from "../outputs/BookReviewCountAggregate";
import { BookReviewMaxAggregate } from "../outputs/BookReviewMaxAggregate";
import { BookReviewMinAggregate } from "../outputs/BookReviewMinAggregate";
import { BookReviewSumAggregate } from "../outputs/BookReviewSumAggregate";

@TypeGraphQL.ObjectType("AggregateBookReview", {
  isAbstract: true,
})
export class AggregateBookReview {
  @TypeGraphQL.Field(() => BookReviewCountAggregate, { nullable: true })
  _count!: BookReviewCountAggregate | null;

  @TypeGraphQL.Field(() => BookReviewAvgAggregate, { nullable: true })
  _avg!: BookReviewAvgAggregate | null;

  @TypeGraphQL.Field(() => BookReviewSumAggregate, { nullable: true })
  _sum!: BookReviewSumAggregate | null;

  @TypeGraphQL.Field(() => BookReviewMinAggregate, { nullable: true })
  _min!: BookReviewMinAggregate | null;

  @TypeGraphQL.Field(() => BookReviewMaxAggregate, { nullable: true })
  _max!: BookReviewMaxAggregate | null;
}
