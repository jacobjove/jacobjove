import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateWithoutCategoryInput } from "../inputs/CategorizationUpdateWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(() => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field(() => CategorizationUpdateWithoutCategoryInput, { nullable: false })
  data!: CategorizationUpdateWithoutCategoryInput;
}
