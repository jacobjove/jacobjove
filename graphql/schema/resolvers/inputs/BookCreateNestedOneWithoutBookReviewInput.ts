import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutBookReviewInput } from "../inputs/BookCreateOrConnectWithoutBookReviewInput";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutBookReviewInput", {
  isAbstract: true,
})
export class BookCreateNestedOneWithoutBookReviewInput {
  @TypeGraphQL.Field(() => BookCreateWithoutBookReviewInput, { nullable: true })
  create?: BookCreateWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutBookReviewInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;
}
