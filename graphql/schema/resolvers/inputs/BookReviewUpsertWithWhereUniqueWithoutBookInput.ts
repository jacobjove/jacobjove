import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewUpdateWithoutBookInput } from "../inputs/BookReviewUpdateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookReviewUpdateWithoutBookInput, { nullable: false })
  update!: BookReviewUpdateWithoutBookInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutBookInput, { nullable: false })
  create!: BookReviewCreateWithoutBookInput;
}
