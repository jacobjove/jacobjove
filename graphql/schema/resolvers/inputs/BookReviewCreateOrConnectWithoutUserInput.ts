import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(() => BookReviewCreateWithoutUserInput, { nullable: false })
  create!: BookReviewCreateWithoutUserInput;
}
