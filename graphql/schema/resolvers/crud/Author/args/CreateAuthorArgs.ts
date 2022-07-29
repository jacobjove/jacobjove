import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorArgs {
  @TypeGraphQL.Field(() => AuthorCreateInput, { nullable: false })
  data!: AuthorCreateInput;
}
