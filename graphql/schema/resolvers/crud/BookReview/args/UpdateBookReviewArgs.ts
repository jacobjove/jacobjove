import * as TypeGraphQL from "type-graphql";
import { BookReviewUpdateInput } from "../../../inputs/BookReviewUpdateInput";
import { BookReviewWhereUniqueInput } from "../../../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookReviewArgs {
  @TypeGraphQL.Field((_type) => BookReviewUpdateInput, {
    nullable: false,
  })
  data!: BookReviewUpdateInput;

  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: false,
  })
  where!: BookReviewWhereUniqueInput;
}
