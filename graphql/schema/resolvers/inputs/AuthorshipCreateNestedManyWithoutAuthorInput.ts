import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyAuthorInputEnvelope } from "../inputs/AuthorshipCreateManyAuthorInputEnvelope";
import { AuthorshipCreateOrConnectWithoutAuthorInput } from "../inputs/AuthorshipCreateOrConnectWithoutAuthorInput";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateNestedManyWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateWithoutAuthorInput], { nullable: true })
  create?: AuthorshipCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: AuthorshipCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], { nullable: true })
  connect?: AuthorshipWhereUniqueInput[] | undefined;
}
