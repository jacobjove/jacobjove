import * as TypeGraphQL from "type-graphql";
import { AuthorshipWhereUniqueInput } from "../../../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorshipWhereUniqueInput;
}
