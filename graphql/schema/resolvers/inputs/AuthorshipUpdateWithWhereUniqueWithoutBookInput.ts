import * as TypeGraphQL from "type-graphql";
import { AuthorshipUpdateWithoutBookInput } from "../inputs/AuthorshipUpdateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateWithoutBookInput, {
    nullable: false,
  })
  data!: AuthorshipUpdateWithoutBookInput;
}
