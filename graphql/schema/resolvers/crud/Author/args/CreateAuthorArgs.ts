import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorCreateInput, { nullable: false })
  data!: AuthorCreateInput;
}
