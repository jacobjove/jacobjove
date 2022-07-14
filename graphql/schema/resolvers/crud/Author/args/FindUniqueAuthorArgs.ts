import * as TypeGraphQL from "type-graphql";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorWhereUniqueInput, {
    nullable: false,
  })
  where!: AuthorWhereUniqueInput;
}
