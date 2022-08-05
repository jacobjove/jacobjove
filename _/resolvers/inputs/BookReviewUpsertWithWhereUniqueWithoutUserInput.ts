import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewUpdateWithoutUserInput } from "../inputs/BookReviewUpdateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpsertWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class BookReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(() => BookReviewUpdateWithoutUserInput, { nullable: false })
  update!: BookReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => BookReviewCreateWithoutUserInput, { nullable: false })
  create!: BookReviewCreateWithoutUserInput;
}
