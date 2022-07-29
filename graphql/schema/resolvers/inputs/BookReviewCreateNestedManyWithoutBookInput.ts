import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyBookInputEnvelope } from "../inputs/BookReviewCreateManyBookInputEnvelope";
import { BookReviewCreateOrConnectWithoutBookInput } from "../inputs/BookReviewCreateOrConnectWithoutBookInput";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedManyWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [BookReviewCreateWithoutBookInput], { nullable: true })
  create?: BookReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;
}
