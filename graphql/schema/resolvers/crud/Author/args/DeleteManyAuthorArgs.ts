import * as TypeGraphQL from "type-graphql";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorWhereInput, {
    nullable: true,
  })
  where?: AuthorWhereInput | undefined;
}
