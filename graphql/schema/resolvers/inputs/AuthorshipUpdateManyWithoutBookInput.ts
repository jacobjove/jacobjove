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
  @TypeGraphQL.Field(() => [AuthorshipCreateWithoutBookInput], { nullable: true })
  create?: AuthorshipCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: AuthorshipCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: AuthorshipUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => AuthorshipCreateManyBookInputEnvelope, { nullable: true })
  createMany?: AuthorshipCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  set?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  disconnect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  delete?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipWhereUniqueInput], { nullable: true })
  connect?: AuthorshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: AuthorshipUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipUpdateManyWithWhereWithoutBookInput], { nullable: true })
  updateMany?: AuthorshipUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(() => [AuthorshipScalarWhereInput], { nullable: true })
  deleteMany?: AuthorshipScalarWhereInput[] | undefined;
}
