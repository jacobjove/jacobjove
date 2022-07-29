import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutBookReviewInput", {
  isAbstract: true,
})
export class BookCreateOrConnectWithoutBookReviewInput {
  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookCreateWithoutBookReviewInput, { nullable: false })
  create!: BookCreateWithoutBookReviewInput;
}
