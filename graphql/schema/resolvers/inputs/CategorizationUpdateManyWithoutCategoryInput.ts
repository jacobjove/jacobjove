import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [CategorizationCreateWithoutCategoryInput], { nullable: true })
  create?: CategorizationCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: CategorizationCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  upsert?: CategorizationUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateManyCategoryInputEnvelope, { nullable: true })
  createMany?: CategorizationCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  set?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  disconnect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  delete?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  connect?: CategorizationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  update?: CategorizationUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true,
  })
  updateMany?: CategorizationUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereInput], { nullable: true })
  deleteMany?: CategorizationScalarWhereInput[] | undefined;
}
