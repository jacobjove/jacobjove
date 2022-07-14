import * as TypeGraphQL from "type-graphql";
import { MantraCreateManyMantraInputEnvelope } from "../inputs/MantraCreateManyMantraInputEnvelope";
import { MantraCreateOrConnectWithoutMantraInput } from "../inputs/MantraCreateOrConnectWithoutMantraInput";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraScalarWhereInput } from "../inputs/MantraScalarWhereInput";
import { MantraUpdateManyWithWhereWithoutMantraInput } from "../inputs/MantraUpdateManyWithWhereWithoutMantraInput";
import { MantraUpdateWithWhereUniqueWithoutMantraInput } from "../inputs/MantraUpdateWithWhereUniqueWithoutMantraInput";
import { MantraUpsertWithWhereUniqueWithoutMantraInput } from "../inputs/MantraUpsertWithWhereUniqueWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraUpdateManyWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpdateManyWithoutMantraInput {
  @TypeGraphQL.Field((_type) => [MantraCreateWithoutMantraInput], {
    nullable: true,
  })
  create?: MantraCreateWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraCreateOrConnectWithoutMantraInput], {
    nullable: true,
  })
  connectOrCreate?: MantraCreateOrConnectWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraUpsertWithWhereUniqueWithoutMantraInput], {
    nullable: true,
  })
  upsert?: MantraUpsertWithWhereUniqueWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => MantraCreateManyMantraInputEnvelope, {
    nullable: true,
  })
  createMany?: MantraCreateManyMantraInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [MantraUpdateWithWhereUniqueWithoutMantraInput], {
    nullable: true,
  })
  update?: MantraUpdateWithWhereUniqueWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraUpdateManyWithWhereWithoutMantraInput], {
    nullable: true,
  })
  updateMany?: MantraUpdateManyWithWhereWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MantraScalarWhereInput[] | undefined;
}
