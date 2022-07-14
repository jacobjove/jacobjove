import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateInput } from "../../../inputs/BookshelfCreateInput";
import { BookshelfUpdateInput } from "../../../inputs/BookshelfUpdateInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: false,
  })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookshelfCreateInput, {
    nullable: false,
  })
  create!: BookshelfCreateInput;

  @TypeGraphQL.Field((_type) => BookshelfUpdateInput, {
    nullable: false,
  })
  update!: BookshelfUpdateInput;
}
