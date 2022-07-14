import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateOrConnectWithoutReadingInput } from "../inputs/BookReviewCreateOrConnectWithoutReadingInput";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedOneWithoutReadingInput", {
  isAbstract: true,
})
export class BookReviewCreateNestedOneWithoutReadingInput {
  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutReadingInput, {
    nullable: true,
  })
  create?: BookReviewCreateWithoutReadingInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateOrConnectWithoutReadingInput, {
    nullable: true,
  })
  connectOrCreate?: BookReviewCreateOrConnectWithoutReadingInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookReviewWhereUniqueInput | undefined;
}
