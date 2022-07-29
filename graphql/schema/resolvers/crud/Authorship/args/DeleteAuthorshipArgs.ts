import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;
}
