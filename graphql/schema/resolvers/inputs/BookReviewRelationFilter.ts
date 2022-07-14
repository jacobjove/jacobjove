import * as TypeGraphQL from "type-graphql";
import { BookReviewWhereInput } from "../inputs/BookReviewWhereInput";

@TypeGraphQL.InputType("BookReviewRelationFilter", {
  isAbstract: true,
})
export class BookReviewRelationFilter {
  @TypeGraphQL.Field((_type) => BookReviewWhereInput, {
    nullable: true,
  })
  is?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereInput, {
    nullable: true,
  })
  isNot?: BookReviewWhereInput | undefined;
}
