import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateOrConnectWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorshipCreateWithoutBookInput, { nullable: false })
  create!: AuthorshipCreateWithoutBookInput;
}
