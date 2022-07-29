import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyMutationInput } from "../inputs/AuthorshipUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AuthorshipScalarWhereInput, { nullable: false })
  where!: AuthorshipScalarWhereInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateManyMutationInput, { nullable: false })
  data!: AuthorshipUpdateManyMutationInput;
}
