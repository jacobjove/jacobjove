import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryUpdateWithoutCategorizationsInput } from "../inputs/CategoryUpdateWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryUpsertWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutCategorizationsInput, { nullable: false })
  update!: CategoryUpdateWithoutCategorizationsInput;

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategorizationsInput, { nullable: false })
  create!: CategoryCreateWithoutCategorizationsInput;
}
