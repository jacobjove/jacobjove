import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateManyOwnerInputEnvelope } from "../inputs/ListCreateManyOwnerInputEnvelope";
import { ListCreateOrConnectWithoutOwnerInput } from "../inputs/ListCreateOrConnectWithoutOwnerInput";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListScalarWhereInput } from "../inputs/ListScalarWhereInput";
import { ListUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ListUpdateManyWithWhereWithoutOwnerInput";
import { ListUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ListUpdateWithWhereUniqueWithoutOwnerInput";
import { ListUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ListUpsertWithWhereUniqueWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpdateManyWithoutOwnerInput", {
  isAbstract: true,
})
export class ListUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => [ListCreateWithoutOwnerInput], { nullable: true })
  create?: ListCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListUpsertWithWhereUniqueWithoutOwnerInput], { nullable: true })
  upsert?: ListUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => ListCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: ListCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ListWhereUniqueInput], { nullable: true })
  set?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListWhereUniqueInput], { nullable: true })
  disconnect?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListWhereUniqueInput], { nullable: true })
  delete?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListWhereUniqueInput], { nullable: true })
  connect?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListUpdateWithWhereUniqueWithoutOwnerInput], { nullable: true })
  update?: ListUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  updateMany?: ListUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListScalarWhereInput], { nullable: true })
  deleteMany?: ListScalarWhereInput[] | undefined;
}
