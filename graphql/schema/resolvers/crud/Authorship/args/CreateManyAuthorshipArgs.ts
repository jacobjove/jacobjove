import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateManyInput } from "../../../inputs/AuthorshipCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAuthorshipArgs {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateManyInput], {
    nullable: false,
  })
  data!: AuthorshipCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
