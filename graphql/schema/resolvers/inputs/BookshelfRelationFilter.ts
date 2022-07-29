import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfWhereInput } from "../inputs/BookshelfWhereInput";

@TypeGraphQL.InputType("BookshelfRelationFilter", {
  isAbstract: true,
})
export class BookshelfRelationFilter {
  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  is?: BookshelfWhereInput | undefined;

  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  isNot?: BookshelfWhereInput | undefined;
}
