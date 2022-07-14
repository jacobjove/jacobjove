import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewUpdateWithoutUserInput } from "../inputs/BookReviewUpdateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: false,
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookReviewUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: BookReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutUserInput, {
    nullable: false,
  })
  create!: BookReviewCreateWithoutUserInput;
}
