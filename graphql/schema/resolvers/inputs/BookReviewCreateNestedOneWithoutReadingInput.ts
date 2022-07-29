import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateOrConnectWithoutReadingInput } from "../inputs/BookReviewCreateOrConnectWithoutReadingInput";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedOneWithoutReadingInput", {
  isAbstract: true,
})
export class BookReviewCreateNestedOneWithoutReadingInput {
  @TypeGraphQL.Field(() => BookReviewCreateWithoutReadingInput, { nullable: true })
  create?: BookReviewCreateWithoutReadingInput | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateOrConnectWithoutReadingInput, { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutReadingInput | undefined;

  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: true })
  connect?: BookReviewWhereUniqueInput | undefined;
}
