import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: false,
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutBookInput, {
    nullable: false,
  })
  create!: BookReviewCreateWithoutBookInput;
}
