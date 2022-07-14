import * as TypeGraphQL from "type-graphql";
import { ActCreateManyParentInputEnvelope } from "../inputs/ActCreateManyParentInputEnvelope";
import { ActCreateOrConnectWithoutParentInput } from "../inputs/ActCreateOrConnectWithoutParentInput";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActScalarWhereInput } from "../inputs/ActScalarWhereInput";
import { ActUpdateManyWithWhereWithoutParentInput } from "../inputs/ActUpdateManyWithWhereWithoutParentInput";
import { ActUpdateWithWhereUniqueWithoutParentInput } from "../inputs/ActUpdateWithWhereUniqueWithoutParentInput";
import { ActUpsertWithWhereUniqueWithoutParentInput } from "../inputs/ActUpsertWithWhereUniqueWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateManyWithoutParentInput", {
  isAbstract: true,
})
export class ActUpdateManyWithoutParentInput {
  @TypeGraphQL.Field((_type) => [ActCreateWithoutParentInput], {
    nullable: true,
  })
  create?: ActCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActCreateOrConnectWithoutParentInput], {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true,
  })
  upsert?: ActUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActCreateManyParentInputEnvelope, {
    nullable: true,
  })
  createMany?: ActCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereUniqueInput], {
    nullable: true,
  })
  set?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereUniqueInput], {
    nullable: true,
  })
  delete?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true,
  })
  update?: ActUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActUpdateManyWithWhereWithoutParentInput], {
    nullable: true,
  })
  updateMany?: ActUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActScalarWhereInput[] | undefined;
}
