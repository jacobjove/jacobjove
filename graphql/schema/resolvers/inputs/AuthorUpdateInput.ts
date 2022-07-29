import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateManyWithoutAuthorInput } from "../inputs/AuthorshipUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("AuthorUpdateInput", {
  isAbstract: true,
})
export class AuthorUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => AuthorshipUpdateManyWithoutAuthorInput, { nullable: true })
  authorships?: AuthorshipUpdateManyWithoutAuthorInput | undefined;
}
