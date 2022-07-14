import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationCreateManyActionInputEnvelope } from "../inputs/IdentityActRelationCreateManyActionInputEnvelope";
import { IdentityActRelationCreateOrConnectWithoutActionInput } from "../inputs/IdentityActRelationCreateOrConnectWithoutActionInput";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationScalarWhereInput } from "../inputs/IdentityActRelationScalarWhereInput";
import { IdentityActRelationUpdateManyWithWhereWithoutActionInput } from "../inputs/IdentityActRelationUpdateManyWithWhereWithoutActionInput";
import { IdentityActRelationUpdateWithWhereUniqueWithoutActionInput } from "../inputs/IdentityActRelationUpdateWithWhereUniqueWithoutActionInput";
import { IdentityActRelationUpsertWithWhereUniqueWithoutActionInput } from "../inputs/IdentityActRelationUpsertWithWhereUniqueWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateManyWithoutActionInput {
  @TypeGraphQL.Field((_type) => [IdentityActRelationCreateWithoutActionInput], {
    nullable: true,
  })
  create?: IdentityActRelationCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationCreateOrConnectWithoutActionInput], {
    nullable: true,
  })
  connectOrCreate?: IdentityActRelationCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationUpsertWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  upsert?: IdentityActRelationUpsertWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationCreateManyActionInputEnvelope, {
    nullable: true,
  })
  createMany?: IdentityActRelationCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereUniqueInput], {
    nullable: true,
  })
  set?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereUniqueInput], {
    nullable: true,
  })
  delete?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereUniqueInput], {
    nullable: true,
  })
  connect?: IdentityActRelationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationUpdateWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  update?: IdentityActRelationUpdateWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationUpdateManyWithWhereWithoutActionInput], {
    nullable: true,
  })
  updateMany?: IdentityActRelationUpdateManyWithWhereWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: IdentityActRelationScalarWhereInput[] | undefined;
}
