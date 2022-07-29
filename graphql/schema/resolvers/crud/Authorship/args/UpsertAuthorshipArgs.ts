import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateInput } from "../../../inputs/AuthorshipCreateInput";
import { AuthorshipUpdateInput } from "../../../inputs/AuthorshipUpdateInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAuthorshipArgs {
  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorshipCreateInput, { nullable: false })
  create!: AuthorshipCreateInput;

  @TypeGraphQL.Field(() => AuthorshipUpdateInput, { nullable: false })
  update!: AuthorshipUpdateInput;
}
