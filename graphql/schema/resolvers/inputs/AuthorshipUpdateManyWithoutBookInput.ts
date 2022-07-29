import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyBookInputEnvelope } from "../inputs/AuthorshipCreateManyBookInputEnvelope";
import { AuthorshipCreateOrConnectWithoutBookInput } from "../inputs/AuthorshipCreateOrConnectWithoutBookInput";
import { AuthorshipCreateWithoutBookInput } from "../inputs/AuthorshipCreateWithoutBookInput";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyWithWhereWithoutBookInput } from "../inputs/AuthorshipUpdateManyWithWhereWithoutBookInput";
import { AuthorshipUpdateWithWhereUniqueWithoutBookInput } from "../inputs/AuthorshipUpdateWithWhereUniqueWithoutBookInput";
import { AuthorshipUpsertWithWhereUniqueWithoutBookInput } from "../inputs/AuthorshipUpsertWithWhereUniqueWithoutBookInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpdateManyWithoutBookInput {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateWithoutBookInput], { nullable: true })
  create?: AuthorshipCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: AuthorshipUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateManyBookInputEnvelope, { nullable: true })
  createMany?: AuthorshipCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], { nullable: true })
  set?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], { nullable: true })
  disconnect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], { nullable: true })
  delete?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], { nullable: true })
  connect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: AuthorshipUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: AuthorshipUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereInput], { nullable: true })
  deleteMany?: AuthorshipScalarWhereInput[] | undefined;
}
