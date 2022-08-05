import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookUpdateWithoutReadingsInput } from "../inputs/BookUpdateWithoutReadingsInput";

@TypeGraphQL.InputType("BookUpsertWithoutReadingsInput", { isAbstract: true })
export class BookUpsertWithoutReadingsInput {
  @TypeGraphQL.Field(() => BookUpdateWithoutReadingsInput, { nullable: false })
  update!: BookUpdateWithoutReadingsInput;

  @TypeGraphQL.Field(() => BookCreateWithoutReadingsInput, { nullable: false })
  create!: BookCreateWithoutReadingsInput;
}
