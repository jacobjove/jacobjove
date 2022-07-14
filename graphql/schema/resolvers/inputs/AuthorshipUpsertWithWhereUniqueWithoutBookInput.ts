import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipUpdateWithoutBookInput } from "../inputs/AuthorshipUpdateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateWithoutBookInput, {
    nullable: false,
  })
  update!: AuthorshipUpdateWithoutBookInput;

  @TypeGraphQL.Field((_type) => AuthorshipCreateWithoutBookInput, {
    nullable: false,
  })
  create!: AuthorshipCreateWithoutBookInput;
}
