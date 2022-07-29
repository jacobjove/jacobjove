import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateInput } from "../../../inputs/BookshelfUpdateInput";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfUpdateInput, { nullable: false })
  data!: BookshelfUpdateInput;

  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;
}
