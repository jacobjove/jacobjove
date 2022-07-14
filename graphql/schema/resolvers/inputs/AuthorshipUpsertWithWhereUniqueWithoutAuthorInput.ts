import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipUpdateWithoutAuthorInput } from "../inputs/AuthorshipUpdateWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateWithoutAuthorInput, {
    nullable: false,
  })
  update!: AuthorshipUpdateWithoutAuthorInput;

  @TypeGraphQL.Field((_type) => AuthorshipCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: AuthorshipCreateWithoutAuthorInput;
}
