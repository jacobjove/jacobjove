import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookUpdateWithoutBookReviewInput } from "../inputs/BookUpdateWithoutBookReviewInput";

@TypeGraphQL.InputType("BookUpsertWithoutBookReviewInput", {
  isAbstract: true,
})
export class BookUpsertWithoutBookReviewInput {
  @TypeGraphQL.Field(() => BookUpdateWithoutBookReviewInput, { nullable: false })
  update!: BookUpdateWithoutBookReviewInput;

  @TypeGraphQL.Field(() => BookCreateWithoutBookReviewInput, { nullable: false })
  create!: BookCreateWithoutBookReviewInput;
}
