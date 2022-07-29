import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyMutationInput } from "../inputs/AuthorshipUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(() => AuthorshipScalarWhereInput, { nullable: false })
  where!: AuthorshipScalarWhereInput;

  @TypeGraphQL.Field(() => AuthorshipUpdateManyMutationInput, { nullable: false })
  data!: AuthorshipUpdateManyMutationInput;
}
