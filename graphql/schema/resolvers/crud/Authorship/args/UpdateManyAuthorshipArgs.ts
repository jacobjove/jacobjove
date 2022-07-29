import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateManyMutationInput } from "../../../inputs/AuthorshipUpdateManyMutationInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorshipArgs {
  @TypeGraphQL.Field(() => AuthorshipUpdateManyMutationInput, { nullable: false })
  data!: AuthorshipUpdateManyMutationInput;

  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  where?: AuthorshipWhereInput | undefined;
}
