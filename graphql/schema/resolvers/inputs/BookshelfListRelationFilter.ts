import * as TypeGraphQL from "type-graphql";
import { BookshelfWhereInput } from "../inputs/BookshelfWhereInput";

@TypeGraphQL.InputType("BookshelfListRelationFilter", {
  isAbstract: true,
})
export class BookshelfListRelationFilter {
  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  every?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  some?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  none?: BookshelfWhereInput | undefined;
}
