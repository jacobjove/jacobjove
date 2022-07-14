import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: false,
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutUserInput, {
    nullable: false,
  })
  create!: BookReviewCreateWithoutUserInput;
}
