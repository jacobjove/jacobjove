import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateManyActInputEnvelope } from "../inputs/CategorizationCreateManyActInputEnvelope";
import { CategorizationCreateOrConnectWithoutActInput } from "../inputs/CategorizationCreateOrConnectWithoutActInput";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyWithWhereWithoutActInput } from "../inputs/CategorizationUpdateManyWithWhereWithoutActInput";
import { CategorizationUpdateWithWhereUniqueWithoutActInput } from "../inputs/CategorizationUpdateWithWhereUniqueWithoutActInput";
import { CategorizationUpsertWithWhereUniqueWithoutActInput } from "../inputs/CategorizationUpsertWithWhereUniqueWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpdateManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [CategorizationCreateWithoutActInput], {
    nullable: true,
  })
  create?: CategorizationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: CategorizationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationUpsertWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  upsert?: CategorizationUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategorizationCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: CategorizationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereUniqueInput], {
    nullable: true,
  })
  set?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereUniqueInput], {
    nullable: true,
  })
  delete?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationUpdateWithWhereUniqueWithoutActInput], {
    nullable: true,
  })
  update?: CategorizationUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationUpdateManyWithWhereWithoutActInput], {
    nullable: true,
  })
  updateMany?: CategorizationUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategorizationScalarWhereInput[] | undefined;
}
