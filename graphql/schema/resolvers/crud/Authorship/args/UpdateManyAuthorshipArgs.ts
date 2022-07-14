import * as TypeGraphQL from "type-graphql";
import { AuthorshipUpdateManyMutationInput } from "../../../inputs/AuthorshipUpdateManyMutationInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AuthorshipUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  where?: AuthorshipWhereInput | undefined;
}
