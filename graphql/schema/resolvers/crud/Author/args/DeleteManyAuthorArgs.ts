import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}
