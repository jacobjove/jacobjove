import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorCreateManyInput } from "../../../inputs/AuthorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAuthorArgs {
  @TypeGraphQL.Field((_type) => [AuthorCreateManyInput], { nullable: false })
  data!: AuthorCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
