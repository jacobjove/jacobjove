import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateInput } from "../../../inputs/BookshelfCreateInput";
import { BookshelfUpdateInput } from "../../../inputs/BookshelfUpdateInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field(() => BookshelfCreateInput, { nullable: false })
  create!: BookshelfCreateInput;

  @TypeGraphQL.Field(() => BookshelfUpdateInput, { nullable: false })
  update!: BookshelfUpdateInput;
}
