import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyUserInputEnvelope } from "../inputs/BookReviewCreateManyUserInputEnvelope";
import { BookReviewCreateOrConnectWithoutUserInput } from "../inputs/BookReviewCreateOrConnectWithoutUserInput";
import { BookReviewCreateWithoutUserInput } from "../inputs/BookReviewCreateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedManyWithoutUserInput", { isAbstract: true })
export class BookReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [BookReviewCreateWithoutUserInput], { nullable: true })
  create?: BookReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateManyUserInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;
}
