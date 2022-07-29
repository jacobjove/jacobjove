import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateOrConnectWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipCreateWithoutAuthorInput, { nullable: false })
  create!: AuthorshipCreateWithoutAuthorInput;
}
