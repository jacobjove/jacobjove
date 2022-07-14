import * as TypeGraphQL from "type-graphql";
import { BookshelfUpdateInput } from "../../../inputs/BookshelfUpdateInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfUpdateInput, {
    nullable: false,
  })
  data!: BookshelfUpdateInput;

  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: false,
  })
  where!: BookshelfWhereUniqueInput;
}
