import * as TypeGraphQL from "type-graphql";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyMutationInput } from "../inputs/BookReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => BookReviewScalarWhereInput, {
    nullable: false,
  })
  where!: BookReviewScalarWhereInput;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BookReviewUpdateManyMutationInput;
}
