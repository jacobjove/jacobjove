import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorUpdateManyMutationInput } from "../../../inputs/AuthorUpdateManyMutationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorArgs {
  @TypeGraphQL.Field(() => AuthorUpdateManyMutationInput, { nullable: false })
  data!: AuthorUpdateManyMutationInput;

  @TypeGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}
