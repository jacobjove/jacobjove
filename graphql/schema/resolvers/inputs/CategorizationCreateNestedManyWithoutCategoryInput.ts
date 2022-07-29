import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyCategoryInputEnvelope } from "../inputs/CategorizationCreateManyCategoryInputEnvelope";
import { CategorizationCreateOrConnectWithoutCategoryInput } from "../inputs/CategorizationCreateOrConnectWithoutCategoryInput";
import { CategorizationCreateWithoutCategoryInput } from "../inputs/CategorizationCreateWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateNestedManyWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(() => [CategorizationCreateWithoutCategoryInput], { nullable: true })
  create?: CategorizationCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: CategorizationCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateManyCategoryInputEnvelope, { nullable: true })
  createMany?: CategorizationCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  connect?: CategorizationWhereUniqueInput[] | undefined;
}
