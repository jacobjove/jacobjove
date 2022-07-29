import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}
