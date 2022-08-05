import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorUpdateWithoutAuthorshipsInput } from "../inputs/AuthorUpdateWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorUpsertWithoutAuthorshipsInput", { isAbstract: true })
export class AuthorUpsertWithoutAuthorshipsInput {
  @TypeGraphQL.Field(() => AuthorUpdateWithoutAuthorshipsInput, { nullable: false })
  update!: AuthorUpdateWithoutAuthorshipsInput;

  @TypeGraphQL.Field(() => AuthorCreateWithoutAuthorshipsInput, { nullable: false })
  create!: AuthorCreateWithoutAuthorshipsInput;
}
