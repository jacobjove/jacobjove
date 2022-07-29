import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyUserInputEnvelope } from "../inputs/BookReviewCreateManyUserInputEnvelope";
import { BookReviewCreateOrConnectWithoutUserInput } from "../inputs/BookReviewCreateOrConnectWithoutUserInput";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [BookReviewCreateWithoutUserInput], { nullable: true })
  create?: BookReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookReviewCreateManyUserInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;
}
