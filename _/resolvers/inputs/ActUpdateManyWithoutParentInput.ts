import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateManyParentInputEnvelope } from "../inputs/ActCreateManyParentInputEnvelope";
import { ActCreateOrConnectWithoutParentInput } from "../inputs/ActCreateOrConnectWithoutParentInput";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActScalarWhereInput } from "../inputs/ActScalarWhereInput";
import { ActUpdateManyWithWhereWithoutParentInput } from "../inputs/ActUpdateManyWithWhereWithoutParentInput";
import { ActUpdateWithWhereUniqueWithoutParentInput } from "../inputs/ActUpdateWithWhereUniqueWithoutParentInput";
import { ActUpsertWithWhereUniqueWithoutParentInput } from "../inputs/ActUpsertWithWhereUniqueWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateManyWithoutParentInput", { isAbstract: true })
export class ActUpdateManyWithoutParentInput {
  @TypeGraphQL.Field(() => [ActCreateWithoutParentInput], { nullable: true })
  create?: ActCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [ActCreateOrConnectWithoutParentInput], { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [ActUpsertWithWhereUniqueWithoutParentInput], { nullable: true })
  upsert?: ActUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => ActCreateManyParentInputEnvelope, { nullable: true })
  createMany?: ActCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActWhereUniqueInput], { nullable: true })
  set?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActWhereUniqueInput], { nullable: true })
  disconnect?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActWhereUniqueInput], { nullable: true })
  delete?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActWhereUniqueInput], { nullable: true })
  connect?: ActWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [ActUpdateWithWhereUniqueWithoutParentInput], { nullable: true })
  update?: ActUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [ActUpdateManyWithWhereWithoutParentInput], { nullable: true })
  updateMany?: ActUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [ActScalarWhereInput], { nullable: true })
  deleteMany?: ActScalarWhereInput[] | undefined;
}
