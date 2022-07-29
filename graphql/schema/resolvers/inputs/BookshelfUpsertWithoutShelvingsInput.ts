import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfUpdateWithoutShelvingsInput } from "../inputs/BookshelfUpdateWithoutShelvingsInput";

@TypeGraphQL.InputType("BookshelfUpsertWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfUpsertWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookshelfUpdateWithoutShelvingsInput, { nullable: false })
  update!: BookshelfUpdateWithoutShelvingsInput;

  @TypeGraphQL.Field(() => BookshelfCreateWithoutShelvingsInput, { nullable: false })
  create!: BookshelfCreateWithoutShelvingsInput;
}
