import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [BookReviewCreateWithoutBookInput], {
    nullable: true,
  })
  create?: BookReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewCreateOrConnectWithoutBookInput], {
    nullable: true,
  })
  connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: BookReviewUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateManyBookInputEnvelope, {
    nullable: true,
  })
  createMany?: BookReviewCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], {
    nullable: true,
  })
  set?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], {
    nullable: true,
  })
  delete?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], {
    nullable: true,
  })
  connect?: BookReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: BookReviewUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  updateMany?: BookReviewUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BookReviewScalarWhereInput[] | undefined;
}
