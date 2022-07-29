import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationUpdateManyWithoutCategoryInput } from "../inputs/CategorizationUpdateManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryUpdateInput", {
  isAbstract: true,
})
export class CategoryUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => CategorizationUpdateManyWithoutCategoryInput, { nullable: true })
  categorizations?: CategorizationUpdateManyWithoutCategoryInput | undefined;
}
