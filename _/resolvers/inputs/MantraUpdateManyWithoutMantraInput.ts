import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyMantraInputEnvelope } from "../inputs/MantraCreateManyMantraInputEnvelope";
import { MantraCreateOrConnectWithoutMantraInput } from "../inputs/MantraCreateOrConnectWithoutMantraInput";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraScalarWhereInput } from "../inputs/MantraScalarWhereInput";
import { MantraUpdateManyWithWhereWithoutMantraInput } from "../inputs/MantraUpdateManyWithWhereWithoutMantraInput";
import { MantraUpdateWithWhereUniqueWithoutMantraInput } from "../inputs/MantraUpdateWithWhereUniqueWithoutMantraInput";
import { MantraUpsertWithWhereUniqueWithoutMantraInput } from "../inputs/MantraUpsertWithWhereUniqueWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateManyWithoutMantraInput", { isAbstract: true })
export class MantraUpdateManyWithoutMantraInput {
  @TypeGraphQL.Field(() => [MantraCreateWithoutMantraInput], { nullable: true })
  create?: MantraCreateWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraCreateOrConnectWithoutMantraInput], { nullable: true })
  connectOrCreate?: MantraCreateOrConnectWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpsertWithWhereUniqueWithoutMantraInput], { nullable: true })
  upsert?: MantraUpsertWithWhereUniqueWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => MantraCreateManyMantraInputEnvelope, { nullable: true })
  createMany?: MantraCreateManyMantraInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  set?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  disconnect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  delete?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  connect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpdateWithWhereUniqueWithoutMantraInput], { nullable: true })
  update?: MantraUpdateWithWhereUniqueWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraUpdateManyWithWhereWithoutMantraInput], { nullable: true })
  updateMany?: MantraUpdateManyWithWhereWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraScalarWhereInput], { nullable: true })
  deleteMany?: MantraScalarWhereInput[] | undefined;
}
