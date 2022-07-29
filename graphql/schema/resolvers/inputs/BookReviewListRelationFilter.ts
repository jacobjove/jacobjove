import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewWhereInput } from "../inputs/BookReviewWhereInput";

@TypeGraphQL.InputType("BookReviewListRelationFilter", {
  isAbstract: true,
})
export class BookReviewListRelationFilter {
  @TypeGraphQL.Field((_type) => BookReviewWhereInput, { nullable: true })
  every?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereInput, { nullable: true })
  some?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereInput, { nullable: true })
  none?: BookReviewWhereInput | undefined;
}
