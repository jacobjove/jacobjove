import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutReadingInput", {
  isAbstract: true,
})
export class BookReviewCreateOrConnectWithoutReadingInput {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(() => BookReviewCreateWithoutReadingInput, { nullable: false })
  create!: BookReviewCreateWithoutReadingInput;
}
