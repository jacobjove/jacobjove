import * as TypeGraphQL from "type-graphql";
import { BookCreateOrConnectWithoutBookReviewInput } from "../inputs/BookCreateOrConnectWithoutBookReviewInput";
import { BookCreateWithoutBookReviewInput } from "../inputs/BookCreateWithoutBookReviewInput";
import { BookUpdateWithoutBookReviewInput } from "../inputs/BookUpdateWithoutBookReviewInput";
import { BookUpsertWithoutBookReviewInput } from "../inputs/BookUpsertWithoutBookReviewInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBookReviewInput", {
  isAbstract: true,
})
export class BookUpdateOneRequiredWithoutBookReviewInput {
  @TypeGraphQL.Field((_type) => BookCreateWithoutBookReviewInput, {
    nullable: true,
  })
  create?: BookCreateWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field((_type) => BookCreateOrConnectWithoutBookReviewInput, {
    nullable: true,
  })
  connectOrCreate?: BookCreateOrConnectWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpsertWithoutBookReviewInput, {
    nullable: true,
  })
  upsert?: BookUpsertWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: true,
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateWithoutBookReviewInput, {
    nullable: true,
  })
  update?: BookUpdateWithoutBookReviewInput | undefined;
}
