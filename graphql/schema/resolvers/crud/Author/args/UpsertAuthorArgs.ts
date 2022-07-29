import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";
import { AuthorUpdateInput } from "../../../inputs/AuthorUpdateInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAuthorArgs {
  @TypeGraphQL.Field(() => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorCreateInput, { nullable: false })
  create!: AuthorCreateInput;

  @TypeGraphQL.Field(() => AuthorUpdateInput, { nullable: false })
  update!: AuthorUpdateInput;
}
