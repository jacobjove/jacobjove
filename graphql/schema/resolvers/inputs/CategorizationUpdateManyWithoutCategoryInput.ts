import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateManyCategoryInputEnvelope } from "../inputs/CategorizationCreateManyCategoryInputEnvelope";
import { CategorizationCreateOrConnectWithoutCategoryInput } from "../inputs/CategorizationCreateOrConnectWithoutCategoryInput";
import { CategorizationCreateWithoutCategoryInput } from "../inputs/CategorizationCreateWithoutCategoryInput";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyWithWhereWithoutCategoryInput } from "../inputs/CategorizationUpdateManyWithWhereWithoutCategoryInput";
import { CategorizationUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/CategorizationUpdateWithWhereUniqueWithoutCategoryInput";
import { CategorizationUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/CategorizationUpsertWithWhereUniqueWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => [CategorizationCreateWithoutCategoryInput], {
    nullable: true,
  })
  create?: CategorizationCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: CategorizationCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  upsert?: CategorizationUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategorizationCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: CategorizationCreateManyCategoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [CategorizationUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  update?: CategorizationUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true,
  })
  updateMany?: CategorizationUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategorizationScalarWhereInput[] | undefined;
}
