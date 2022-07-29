import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyMutationInput } from "../inputs/BookReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => BookReviewScalarWhereInput, { nullable: false })
  where!: BookReviewScalarWhereInput;

  @TypeGraphQL.Field(() => BookReviewUpdateManyMutationInput, { nullable: false })
  data!: BookReviewUpdateManyMutationInput;
}
