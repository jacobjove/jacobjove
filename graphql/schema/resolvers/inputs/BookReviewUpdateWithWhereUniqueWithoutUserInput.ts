import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewUpdateWithoutUserInput } from "../inputs/BookReviewUpdateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(() => BookReviewUpdateWithoutUserInput, { nullable: false })
  data!: BookReviewUpdateWithoutUserInput;
}
