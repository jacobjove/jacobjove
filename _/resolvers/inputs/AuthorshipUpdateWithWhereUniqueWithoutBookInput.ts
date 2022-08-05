import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipUpdateWithoutBookInput } from "../inputs/AuthorshipUpdateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithWhereUniqueWithoutBookInput", { isAbstract: true })
export class AuthorshipUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorshipUpdateWithoutBookInput, { nullable: false })
  data!: AuthorshipUpdateWithoutBookInput;
}
