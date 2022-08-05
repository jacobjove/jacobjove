import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateOrConnectWithoutBookReviewInput } from "../inputs/BookCreateOrConnectWithoutBookReviewInput";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookUpdateWithoutBookReviewInput } from "../inputs/BookUpdateWithoutBookReviewInput";
import { BookUpsertWithoutBookReviewInput } from "../inputs/BookUpsertWithoutBookReviewInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBookReviewInput", { isAbstract: true })
export class BookUpdateOneRequiredWithoutBookReviewInput {
  @TypeGraphQL.Field(() => BookCreateWithoutBookReviewInput, { nullable: true })
  create?: BookCreateWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => BookCreateOrConnectWithoutBookReviewInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => BookUpsertWithoutBookReviewInput, { nullable: true })
  upsert?: BookUpsertWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateWithoutBookReviewInput, { nullable: true })
  update?: BookUpdateWithoutBookReviewInput | undefined;
}
