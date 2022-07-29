import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateWithoutAuthorshipsInput } from "../inputs/AuthorCreateWithoutAuthorshipsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateOrConnectWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorCreateOrConnectWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorCreateWithoutAuthorshipsInput, { nullable: false })
  create!: AuthorCreateWithoutAuthorshipsInput;
}
