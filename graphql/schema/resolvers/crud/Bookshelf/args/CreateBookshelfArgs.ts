import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateInput } from "../../../inputs/BookshelfCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfCreateInput, { nullable: false })
  data!: BookshelfCreateInput;
}
