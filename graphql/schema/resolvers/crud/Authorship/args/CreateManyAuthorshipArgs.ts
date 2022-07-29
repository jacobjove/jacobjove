import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyInput } from "../../../inputs/AuthorshipCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAuthorshipArgs {
  @TypeGraphQL.Field(() => [AuthorshipCreateManyInput], { nullable: false })
  data!: AuthorshipCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
