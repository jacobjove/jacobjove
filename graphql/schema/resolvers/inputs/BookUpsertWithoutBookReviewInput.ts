import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookUpdateWithoutBookReviewInput } from "../inputs/BookUpdateWithoutBookReviewInput";

@TypeGraphQL.InputType("BookUpsertWithoutBookReviewInput", {
  isAbstract: true,
})
export class BookUpsertWithoutBookReviewInput {
  @TypeGraphQL.Field((_type) => BookUpdateWithoutBookReviewInput, { nullable: false })
  update!: BookUpdateWithoutBookReviewInput;

  @TypeGraphQL.Field((_type) => BookCreateWithoutBookReviewInput, { nullable: false })
  create!: BookCreateWithoutBookReviewInput;
}
