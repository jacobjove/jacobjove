import * as TypeGraphQL from "type-graphql";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyMutationInput } from "../inputs/AuthorshipUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field((_type) => AuthorshipScalarWhereInput, {
    nullable: false,
  })
  where!: AuthorshipScalarWhereInput;

  @TypeGraphQL.Field((_type) => AuthorshipUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AuthorshipUpdateManyMutationInput;
}
