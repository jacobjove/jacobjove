import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateOrConnectWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipCreateWithoutBookInput, {
    nullable: false,
  })
  create!: AuthorshipCreateWithoutBookInput;
}
