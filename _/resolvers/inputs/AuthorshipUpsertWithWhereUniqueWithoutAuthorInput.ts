import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipUpdateWithoutAuthorInput } from "../inputs/AuthorshipUpdateWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpsertWithWhereUniqueWithoutAuthorInput", { isAbstract: true })
export class AuthorshipUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorshipUpdateWithoutAuthorInput, { nullable: false })
  update!: AuthorshipUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(() => AuthorshipCreateWithoutAuthorInput, { nullable: false })
  create!: AuthorshipCreateWithoutAuthorInput;
}
