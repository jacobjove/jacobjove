import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateManyBookInput } from "../inputs/AuthorshipCreateManyBookInput";

@TypeGraphQL.InputType("AuthorshipCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class AuthorshipCreateManyBookInputEnvelope {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateManyBookInput], {
    nullable: false,
  })
  data!: AuthorshipCreateManyBookInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
