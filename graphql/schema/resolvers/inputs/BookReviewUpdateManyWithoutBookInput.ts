import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyBookInputEnvelope } from "../inputs/BookReviewCreateManyBookInputEnvelope";
import { BookReviewCreateOrConnectWithoutBookInput } from "../inputs/BookReviewCreateOrConnectWithoutBookInput";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewScalarWhereInput } from "../inputs/BookReviewScalarWhereInput";
import { BookReviewUpdateManyWithWhereWithoutBookInput } from "../inputs/BookReviewUpdateManyWithWhereWithoutBookInput";
import { BookReviewUpdateWithWhereUniqueWithoutBookInput } from "../inputs/BookReviewUpdateWithWhereUniqueWithoutBookInput";
import { BookReviewUpsertWithWhereUniqueWithoutBookInput } from "../inputs/BookReviewUpsertWithWhereUniqueWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateManyWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(() => [BookReviewCreateWithoutBookInput], { nullable: true })
  create?: BookReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  set?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  disconnect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  delete?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: BookReviewUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewScalarWhereInput], { nullable: true })
  deleteMany?: BookReviewScalarWhereInput[] | undefined;
}
