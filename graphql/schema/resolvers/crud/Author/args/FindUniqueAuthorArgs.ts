import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorArgs {
  @TypeGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}
