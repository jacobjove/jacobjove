import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookUpdateWithoutAuthorshipsInput } from "../inputs/BookUpdateWithoutAuthorshipsInput";

@TypeGraphQL.InputType("BookUpsertWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class BookUpsertWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => BookUpdateWithoutAuthorshipsInput, { nullable: false })
  update!: BookUpdateWithoutAuthorshipsInput;

  @TypeGraphQL.Field((_type) => BookCreateWithoutAuthorshipsInput, { nullable: false })
  create!: BookCreateWithoutAuthorshipsInput;
}
