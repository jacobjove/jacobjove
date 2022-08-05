import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateOrConnectWithoutReadingInput } from "../inputs/BookReviewCreateOrConnectWithoutReadingInput";
import { BookReviewCreateWithoutReadingInput } from "../inputs/BookReviewCreateWithoutReadingInput";
import { BookReviewUpdateWithoutReadingInput } from "../inputs/BookReviewUpdateWithoutReadingInput";
import { BookReviewUpsertWithoutReadingInput } from "../inputs/BookReviewUpsertWithoutReadingInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateOneWithoutReadingInput", { isAbstract: true })
export class BookReviewUpdateOneWithoutReadingInput {
  @TypeGraphQL.Field(() => BookReviewCreateWithoutReadingInput, { nullable: true })
  create?: BookReviewCreateWithoutReadingInput | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateOrConnectWithoutReadingInput, { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutReadingInput | undefined;

  @TypeGraphQL.Field(() => BookReviewUpsertWithoutReadingInput, { nullable: true })
  upsert?: BookReviewUpsertWithoutReadingInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: true })
  connect?: BookReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookReviewUpdateWithoutReadingInput, { nullable: true })
  update?: BookReviewUpdateWithoutReadingInput | undefined;
}
