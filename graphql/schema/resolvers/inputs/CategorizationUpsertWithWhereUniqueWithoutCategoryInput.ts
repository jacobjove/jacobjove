import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateWithoutCategoryInput } from "../inputs/CategorizationCreateWithoutCategoryInput";
import { CategorizationUpdateWithoutCategoryInput } from "../inputs/CategorizationUpdateWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpsertWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationUpdateWithoutCategoryInput, { nullable: false })
  update!: CategorizationUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(() => CategorizationCreateWithoutCategoryInput, { nullable: false })
  create!: CategorizationCreateWithoutCategoryInput;
}
