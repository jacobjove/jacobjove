import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutShelvingsInput } from "../inputs/BookCreateWithoutShelvingsInput";
import { BookUpdateWithoutShelvingsInput } from "../inputs/BookUpdateWithoutShelvingsInput";

@TypeGraphQL.InputType("BookUpsertWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookUpsertWithoutShelvingsInput {
  @TypeGraphQL.Field(() => BookUpdateWithoutShelvingsInput, { nullable: false })
  update!: BookUpdateWithoutShelvingsInput;

  @TypeGraphQL.Field(() => BookCreateWithoutShelvingsInput, { nullable: false })
  create!: BookCreateWithoutShelvingsInput;
}
