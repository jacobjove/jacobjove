import * as TypeGraphQL from "type-graphql";
import { CategorizationScalarWhereInput } from "../inputs/CategorizationScalarWhereInput";
import { CategorizationUpdateManyMutationInput } from "../inputs/CategorizationUpdateManyMutationInput";

@TypeGraphQL.InputType("CategorizationUpdateManyWithWhereWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => CategorizationScalarWhereInput, {
    nullable: false,
  })
  where!: CategorizationScalarWhereInput;

  @TypeGraphQL.Field((_type) => CategorizationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CategorizationUpdateManyMutationInput;
}
