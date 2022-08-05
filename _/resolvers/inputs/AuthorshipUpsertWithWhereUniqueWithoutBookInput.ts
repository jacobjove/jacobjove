import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipUpdateWithoutBookInput } from "../inputs/AuthorshipUpdateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpsertWithWhereUniqueWithoutBookInput", { isAbstract: true })
export class AuthorshipUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(() => AuthorshipWhereUniqueInput, { nullable: false })
  where!: AuthorshipWhereUniqueInput;

  @TypeGraphQL.Field(() => AuthorshipUpdateWithoutBookInput, { nullable: false })
  update!: AuthorshipUpdateWithoutBookInput;

  @TypeGraphQL.Field(() => AuthorshipCreateWithoutBookInput, { nullable: false })
  create!: AuthorshipCreateWithoutBookInput;
}
