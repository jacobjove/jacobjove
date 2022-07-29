import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateInput } from "../../../inputs/AuthorshipUpdateInput";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAuthorshipArgs {
  @TypeGraphQL.Field(() => AuthorshipUpdateInput, { nullable: false })
  data!: AuthorshipUpdateInput;

  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;
}
