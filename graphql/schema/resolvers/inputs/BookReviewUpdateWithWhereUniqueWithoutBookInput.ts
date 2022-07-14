import * as TypeGraphQL from "type-graphql";
import { BookReviewUpdateWithoutBookInput } from "../inputs/BookReviewUpdateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: false,
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookReviewUpdateWithoutBookInput, {
    nullable: false,
  })
  data!: BookReviewUpdateWithoutBookInput;
}
