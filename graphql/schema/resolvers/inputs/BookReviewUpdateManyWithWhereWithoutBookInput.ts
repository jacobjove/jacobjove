import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyMutationInput } from "../inputs/BookReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field((_type) => BookReviewScalarWhereInput, { nullable: false })
  where!: BookReviewScalarWhereInput;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyMutationInput, { nullable: false })
  data!: BookReviewUpdateManyMutationInput;
}
