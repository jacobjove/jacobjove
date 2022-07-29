import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorUpdateWithoutAuthorshipsInput } from "../inputs/AuthorUpdateWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorUpsertWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorUpsertWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => AuthorUpdateWithoutAuthorshipsInput, { nullable: false })
  update!: AuthorUpdateWithoutAuthorshipsInput;

  @TypeGraphQL.Field((_type) => AuthorCreateWithoutAuthorshipsInput, { nullable: false })
  create!: AuthorCreateWithoutAuthorshipsInput;
}
