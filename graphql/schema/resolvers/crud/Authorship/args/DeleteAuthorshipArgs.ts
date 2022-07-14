import * as TypeGraphQL from "type-graphql";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;
}
