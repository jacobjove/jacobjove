import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewUpdateWithoutReadingInput } from "../inputs/BookReviewUpdateWithoutReadingInput";

@TypeGraphQL.InputType("BookReviewUpsertWithoutReadingInput", { isAbstract: true })
export class BookReviewUpsertWithoutReadingInput {
  @TypeGraphQL.Field(() => BookReviewUpdateWithoutReadingInput, { nullable: false })
  update!: BookReviewUpdateWithoutReadingInput;

  @TypeGraphQL.Field(() => BookReviewCreateWithoutReadingInput, { nullable: false })
  create!: BookReviewCreateWithoutReadingInput;
}
