import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipCreateManyAuthorInputEnvelope } from "../inputs/AuthorshipCreateManyAuthorInputEnvelope";
import { AuthorshipCreateOrConnectWithoutAuthorInput } from "../inputs/AuthorshipCreateOrConnectWithoutAuthorInput";
import { AuthorshipCreateWithoutAuthorInput } from "../inputs/AuthorshipCreateWithoutAuthorInput";
import { AuthorshipScalarWhereInput } from "../inputs/AuthorshipScalarWhereInput";
import { AuthorshipUpdateManyWithWhereWithoutAuthorInput } from "../inputs/AuthorshipUpdateManyWithWhereWithoutAuthorInput";
import { AuthorshipUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/AuthorshipUpdateWithWhereUniqueWithoutAuthorInput";
import { AuthorshipUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/AuthorshipUpsertWithWhereUniqueWithoutAuthorInput";
import { AuthorshipWhereUniqueInput } from "../inputs/AuthorshipWhereUniqueInput";

@TypeGraphQL.InputType("AuthorshipUpdateManyWithoutAuthorInput", { isAbstract: true })
export class AuthorshipUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(() => [AuthorshipCreateWithoutAuthorInput], { nullable: true })
  create?: AuthorshipCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  upsert?: AuthorshipUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorshipCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: AuthorshipCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  set?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  disconnect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  delete?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  connect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  update?: AuthorshipUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  updateMany?: AuthorshipUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereInput], { nullable: true })
  deleteMany?: AuthorshipScalarWhereInput[] | undefined;
}
