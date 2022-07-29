import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyUserInputEnvelope } from "../inputs/MantraCreateManyUserInputEnvelope";
import { MantraCreateOrConnectWithoutUserInput } from "../inputs/MantraCreateOrConnectWithoutUserInput";
import { MantraCreateWithoutUserInput } from "../inputs/MantraCreateWithoutUserInput";
import { MantraScalarWhereInput } from "../inputs/MantraScalarWhereInput";
import { MantraUpdateManyWithWhereWithoutUserInput } from "../inputs/MantraUpdateManyWithWhereWithoutUserInput";
import { MantraUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MantraUpdateWithWhereUniqueWithoutUserInput";
import { MantraUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MantraUpsertWithWhereUniqueWithoutUserInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class MantraUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [MantraCreateWithoutUserInput], { nullable: true })
  create?: MantraCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: MantraCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: MantraUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => MantraCreateManyUserInputEnvelope, { nullable: true })
  createMany?: MantraCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  set?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  disconnect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  delete?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  connect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: MantraUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: MantraUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraScalarWhereInput], { nullable: true })
  deleteMany?: MantraScalarWhereInput[] | undefined;
}
