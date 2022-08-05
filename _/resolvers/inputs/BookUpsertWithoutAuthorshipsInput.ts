import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateWithoutAuthorshipsInput } from "../inputs/BookCreateWithoutAuthorshipsInput";
import { BookUpdateWithoutAuthorshipsInput } from "../inputs/BookUpdateWithoutAuthorshipsInput";

@TypeGraphQL.InputType("BookUpsertWithoutAuthorshipsInput", { isAbstract: true })
export class BookUpsertWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => BookUpdateWithoutAuthorshipsInput, { nullable: false })
  update!: BookUpdateWithoutAuthorshipsInput;

  @TypeGraphQL.Field(() => BookCreateWithoutAuthorshipsInput, { nullable: false })
  create!: BookCreateWithoutAuthorshipsInput;
}
