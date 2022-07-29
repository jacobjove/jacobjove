import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyUserInputEnvelope } from "../inputs/BookReviewCreateManyUserInputEnvelope";
import { BookReviewCreateOrConnectWithoutUserInput } from "../inputs/BookReviewCreateOrConnectWithoutUserInput";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/BookReviewUpdateManyWithWhereWithoutUserInput";
import { BookReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookReviewUpdateWithWhereUniqueWithoutUserInput";
import { BookReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookReviewUpsertWithWhereUniqueWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [BookReviewCreateWithoutUserInput], { nullable: true })
  create?: BookReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: BookReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateManyUserInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  set?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  disconnect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  delete?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: BookReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: BookReviewUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereInput], { nullable: true })
  deleteMany?: BookReviewScalarWhereInput[] | undefined;
}
