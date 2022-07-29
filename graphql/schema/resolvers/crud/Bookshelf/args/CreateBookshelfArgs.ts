import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateInput } from "../../../inputs/BookshelfCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfCreateInput, { nullable: false })
  data!: BookshelfCreateInput;
}
