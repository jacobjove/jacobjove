import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyBookInput } from "../inputs/AuthorshipCreateManyBookInput";

@TypeGraphQL.InputType("AuthorshipCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class AuthorshipCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(() => [AuthorshipCreateManyBookInput], { nullable: false })
  data!: AuthorshipCreateManyBookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
