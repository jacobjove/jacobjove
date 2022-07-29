import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfWhereUniqueInput } from "../../../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;
}
