import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAuthorshipArgs {
  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  where?: AuthorshipWhereInput | undefined;
}
