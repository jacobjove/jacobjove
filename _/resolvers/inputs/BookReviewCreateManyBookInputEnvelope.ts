import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyBookInput } from "../inputs/BookReviewCreateManyBookInput";

@TypeGraphQL.InputType("BookReviewCreateManyBookInputEnvelope", { isAbstract: true })
export class BookReviewCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(() => [BookReviewCreateManyBookInput], { nullable: false })
  data!: BookReviewCreateManyBookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
