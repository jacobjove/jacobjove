import * as TypeGraphQL from "type-graphql";
import { CategorizationUpdateWithoutCategoryInput } from "../inputs/CategorizationUpdateWithoutCategoryInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, {
    nullable: false,
  })
  where!: CategorizationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateWithoutCategoryInput, {
    nullable: false,
  })
  data!: CategorizationUpdateWithoutCategoryInput;
}
