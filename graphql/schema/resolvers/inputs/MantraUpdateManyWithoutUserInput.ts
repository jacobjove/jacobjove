import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [MantraCreateWithoutUserInput], {
    nullable: true,
  })
  create?: MantraCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: MantraCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: MantraUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => MantraCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MantraCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], {
    nullable: true,
  })
  set?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], {
    nullable: true,
  })
  delete?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], {
    nullable: true,
  })
  connect?: MantraWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: MantraUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: MantraUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MantraScalarWhereInput[] | undefined;
}
