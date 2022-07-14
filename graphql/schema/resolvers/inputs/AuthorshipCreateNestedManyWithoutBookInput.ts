import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateManyBookInputEnvelope } from "../inputs/AuthorshipCreateManyBookInputEnvelope";
import { AuthorshipCreateOrConnectWithoutBookInput } from "../inputs/AuthorshipCreateOrConnectWithoutBookInput";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipCreateNestedManyWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateWithoutBookInput], {
    nullable: true,
  })
  create?: AuthorshipCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipCreateOrConnectWithoutBookInput], {
    nullable: true,
  })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateManyBookInputEnvelope, {
    nullable: true,
  })
  createMany?: AuthorshipCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], {
    nullable: true,
  })
  connect?: AuthorshipWhereUniqueInput[] | undefined;
}
