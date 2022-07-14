import * as TypeGraphQL from "type-graphql";
import { AuthorshipCreateManyAuthorInputEnvelope } from "../inputs/AuthorshipCreateManyAuthorInputEnvelope";
import { AuthorshipCreateOrConnectWithoutAuthorInput } from "../inputs/AuthorshipCreateOrConnectWithoutAuthorInput";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyWithWhereWithoutAuthorInput } from "../inputs/AuthorshipUpdateManyWithWhereWithoutAuthorInput";
import { AuthorshipUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/AuthorshipUpdateWithWhereUniqueWithoutAuthorInput";
import { AuthorshipUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/AuthorshipUpsertWithWhereUniqueWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => [AuthorshipCreateWithoutAuthorInput], {
    nullable: true,
  })
  create?: AuthorshipCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  upsert?: AuthorshipUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateManyAuthorInputEnvelope, {
    nullable: true,
  })
  createMany?: AuthorshipCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], {
    nullable: true,
  })
  set?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], {
    nullable: true,
  })
  delete?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipWhereUniqueInput], {
    nullable: true,
  })
  connect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  update?: AuthorshipUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  updateMany?: AuthorshipUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: AuthorshipScalarWhereInput[] | undefined;
}
