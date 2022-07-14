import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateInput } from "../../../inputs/AuthorshipCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipCreateInput, {
    nullable: false,
  })
  data!: AuthorshipCreateInput;
}
