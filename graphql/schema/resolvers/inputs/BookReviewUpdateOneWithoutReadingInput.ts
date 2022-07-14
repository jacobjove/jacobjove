import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateOrConnectWithoutReadingInput } from "../inputs/BookReviewCreateOrConnectWithoutReadingInput";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewUpdateWithoutReadingInput } from "../inputs/BookReviewUpdateWithoutReadingInput";
import { BookReviewUpsertWithoutReadingInput } from "../inputs/BookReviewUpsertWithoutReadingInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateOneWithoutReadingInput", {
  isAbstract: true,
})
export class BookReviewUpdateOneWithoutReadingInput {
  @TypeGraphQL.Field((_type) => BookReviewCreateWithoutReadingInput, {
    nullable: true,
  })
  create?: BookReviewCreateWithoutReadingInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateOrConnectWithoutReadingInput, {
    nullable: true,
  })
  connectOrCreate?: BookReviewCreateOrConnectWithoutReadingInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpsertWithoutReadingInput, {
    nullable: true,
  })
  upsert?: BookReviewUpsertWithoutReadingInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateWithoutReadingInput, {
    nullable: true,
  })
  update?: BookReviewUpdateWithoutReadingInput | undefined;
}
