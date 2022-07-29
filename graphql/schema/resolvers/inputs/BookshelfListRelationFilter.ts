import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfWhereInput } from "../inputs/BookshelfWhereInput";

@TypeGraphQL.InputType("BookshelfListRelationFilter", {
  isAbstract: true,
})
export class BookshelfListRelationFilter {
  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  every?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  some?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  none?: BookshelfWhereInput | undefined;
}
