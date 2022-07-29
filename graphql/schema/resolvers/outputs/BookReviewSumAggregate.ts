import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookReviewSumAggregate", {
  isAbstract: true,
})
export class BookReviewSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rating!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  readingId!: string | null;
}
