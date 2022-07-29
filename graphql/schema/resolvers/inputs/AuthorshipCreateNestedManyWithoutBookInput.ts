import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyBookInputEnvelope } from "../inputs/AuthorshipCreateManyBookInputEnvelope";
import { AuthorshipCreateOrConnectWithoutBookInput } from "../inputs/AuthorshipCreateOrConnectWithoutBookInput";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateNestedManyWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(() => [AuthorshipCreateWithoutBookInput], { nullable: true })
  create?: AuthorshipCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorshipCreateManyBookInputEnvelope, { nullable: true })
  createMany?: AuthorshipCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  connect?: AuthorshipWhereUniqueInput[] | undefined;
}
