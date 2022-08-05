import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyUserInputEnvelope } from "../inputs/IdentityCreateManyUserInputEnvelope";
import { IdentityCreateOrConnectWithoutUserInput } from "../inputs/IdentityCreateOrConnectWithoutUserInput";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityScalarWhereInput } from "../inputs/IdentityScalarWhereInput";
import { IdentityUpdateManyWithWhereWithoutUserInput } from "../inputs/IdentityUpdateManyWithWhereWithoutUserInput";
import { IdentityUpdateWithWhereUniqueWithoutUserInput } from "../inputs/IdentityUpdateWithWhereUniqueWithoutUserInput";
import { IdentityUpsertWithWhereUniqueWithoutUserInput } from "../inputs/IdentityUpsertWithWhereUniqueWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpdateManyWithoutUserInput", { isAbstract: true })
export class IdentityUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [IdentityCreateWithoutUserInput], { nullable: true })
  create?: IdentityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: IdentityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: IdentityUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityCreateManyUserInputEnvelope, { nullable: true })
  createMany?: IdentityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereUniqueInput], { nullable: true })
  set?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereUniqueInput], { nullable: true })
  disconnect?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereUniqueInput], { nullable: true })
  delete?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereUniqueInput], { nullable: true })
  connect?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: IdentityUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: IdentityUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityScalarWhereInput], { nullable: true })
  deleteMany?: IdentityScalarWhereInput[] | undefined;
}
