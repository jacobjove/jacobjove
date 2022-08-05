import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyBookInputEnvelope } from "../inputs/BookReviewCreateManyBookInputEnvelope";
import { BookReviewCreateOrConnectWithoutBookInput } from "../inputs/BookReviewCreateOrConnectWithoutBookInput";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateNestedManyWithoutBookInput", { isAbstract: true })
export class BookReviewCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(() => [BookReviewCreateWithoutBookInput], { nullable: true })
  create?: BookReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [BookReviewCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: BookReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => BookReviewCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookReviewCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BookReviewWhereUniqueInput], { nullable: true })
  connect?: BookReviewWhereUniqueInput[] | undefined;
}
