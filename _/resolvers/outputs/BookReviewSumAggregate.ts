import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookReviewSumAggregate", { isAbstract: true })
export class BookReviewSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rating!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  bookId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  readingId!: string | null;
}
