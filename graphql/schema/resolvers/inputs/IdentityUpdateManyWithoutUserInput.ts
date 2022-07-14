import * as TypeGraphQL from "type-graphql";
import { IdentityCreateManyUserInputEnvelope } from "../inputs/IdentityCreateManyUserInputEnvelope";
import { IdentityCreateOrConnectWithoutUserInput } from "../inputs/IdentityCreateOrConnectWithoutUserInput";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityScalarWhereInput } from "../inputs/IdentityScalarWhereInput";
import { IdentityUpdateManyWithWhereWithoutUserInput } from "../inputs/IdentityUpdateManyWithWhereWithoutUserInput";
import { IdentityUpdateWithWhereUniqueWithoutUserInput } from "../inputs/IdentityUpdateWithWhereUniqueWithoutUserInput";
import { IdentityUpsertWithWhereUniqueWithoutUserInput } from "../inputs/IdentityUpsertWithWhereUniqueWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class IdentityUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [IdentityCreateWithoutUserInput], {
    nullable: true,
  })
  create?: IdentityCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: IdentityUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: IdentityCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereUniqueInput], {
    nullable: true,
  })
  set?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereUniqueInput], {
    nullable: true,
  })
  delete?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereUniqueInput], {
    nullable: true,
  })
  connect?: IdentityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: IdentityUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: IdentityUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: IdentityScalarWhereInput[] | undefined;
}
