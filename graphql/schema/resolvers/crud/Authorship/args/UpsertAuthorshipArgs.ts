import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateInput } from "../../../inputs/AuthorshipCreateInput";
import { AuthorshipUpdateInput } from "../../../inputs/AuthorshipUpdateInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AuthorshipCreateInput, {
    nullable: false,
  })
  create!: AuthorshipCreateInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateInput, {
    nullable: false,
  })
  update!: AuthorshipUpdateInput;
}
