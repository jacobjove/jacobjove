import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryUpdateWithoutCategorizationsInput } from "../inputs/CategoryUpdateWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryUpsertWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => CategoryUpdateWithoutCategorizationsInput, { nullable: false })
  update!: CategoryUpdateWithoutCategorizationsInput;

  @TypeGraphQL.Field(() => CategoryCreateWithoutCategorizationsInput, { nullable: false })
  create!: CategoryCreateWithoutCategorizationsInput;
}
