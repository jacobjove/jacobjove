import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateManyOwnerInputEnvelope } from "../inputs/ListCreateManyOwnerInputEnvelope";
import { ListCreateOrConnectWithoutOwnerInput } from "../inputs/ListCreateOrConnectWithoutOwnerInput";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListScalarWhereInput } from "../inputs/ListScalarWhereInput";
import { ListUpdateManyWithWhereWithoutOwnerInput } from "../inputs/ListUpdateManyWithWhereWithoutOwnerInput";
import { ListUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/ListUpdateWithWhereUniqueWithoutOwnerInput";
import { ListUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/ListUpsertWithWhereUniqueWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListUpdateManyWithoutOwnerInput", { isAbstract: true })
export class ListUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(() => [ListCreateWithoutOwnerInput], { nullable: true })
  create?: ListCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [ListCreateOrConnectWithoutOwnerInput], { nullable: true })
  connectOrCreate?: ListCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [ListUpsertWithWhereUniqueWithoutOwnerInput], { nullable: true })
  upsert?: ListUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => ListCreateManyOwnerInputEnvelope, { nullable: true })
  createMany?: ListCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ListWhereUniqueInput], { nullable: true })
  set?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ListWhereUniqueInput], { nullable: true })
  disconnect?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ListWhereUniqueInput], { nullable: true })
  delete?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ListWhereUniqueInput], { nullable: true })
  connect?: ListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ListUpdateWithWhereUniqueWithoutOwnerInput], { nullable: true })
  update?: ListUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [ListUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  updateMany?: ListUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(() => [ListScalarWhereInput], { nullable: true })
  deleteMany?: ListScalarWhereInput[] | undefined;
}
