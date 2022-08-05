import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyAuthorInput } from "../inputs/AuthorshipCreateManyAuthorInput";

@TypeGraphQL.InputType("AuthorshipCreateManyAuthorInputEnvelope", { isAbstract: true })
export class AuthorshipCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(() => [AuthorshipCreateManyAuthorInput], { nullable: false })
  data!: AuthorshipCreateManyAuthorInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
