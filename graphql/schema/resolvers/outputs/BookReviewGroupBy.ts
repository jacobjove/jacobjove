import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookReviewAvgAggregate } from "../outputs/BookReviewAvgAggregate";
import { BookReviewCountAggregate } from "../outputs/BookReviewCountAggregate";
import { BookReviewMaxAggregate } from "../outputs/BookReviewMaxAggregate";
import { BookReviewMinAggregate } from "../outputs/BookReviewMinAggregate";
import { BookReviewSumAggregate } from "../outputs/BookReviewSumAggregate";

@TypeGraphQL.ObjectType("BookReviewGroupBy", {
  isAbstract: true,
})
export class BookReviewGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  review!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rating!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  readingId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
