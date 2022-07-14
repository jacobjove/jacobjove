import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateManyAuthorInput } from "../inputs/AuthorshipCreateManyAuthorInput";

@TypeGraphQL.InputType("AuthorshipCreateManyAuthorInputEnvelope", {
  isAbstract: true,
})
export class AuthorshipCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateManyAuthorInput], {
    nullable: false,
  })
  data!: AuthorshipCreateManyAuthorInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
