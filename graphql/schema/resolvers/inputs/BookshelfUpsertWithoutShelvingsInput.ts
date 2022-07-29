import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfUpdateWithoutShelvingsInput } from "../inputs/BookshelfUpdateWithoutShelvingsInput";

@TypeGraphQL.InputType("BookshelfUpsertWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfUpsertWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => BookshelfUpdateWithoutShelvingsInput, { nullable: false })
  update!: BookshelfUpdateWithoutShelvingsInput;

  @TypeGraphQL.Field((_type) => BookshelfCreateWithoutShelvingsInput, { nullable: false })
  create!: BookshelfCreateWithoutShelvingsInput;
}
