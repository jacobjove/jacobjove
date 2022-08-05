import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateWithoutBookInput } from "../inputs/BookReviewCreateWithoutBookInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewCreateOrConnectWithoutBookInput", { isAbstract: true })
export class BookReviewCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(() => BookReviewCreateWithoutBookInput, { nullable: false })
  create!: BookReviewCreateWithoutBookInput;
}
