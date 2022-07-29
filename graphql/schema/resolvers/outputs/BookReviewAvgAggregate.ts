import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookReviewAvgAggregate", {
  isAbstract: true,
})
export class BookReviewAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  rating!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  bookId!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  readingId!: number | null;
}
