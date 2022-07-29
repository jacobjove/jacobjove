import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategorizationCreateNestedManyWithoutCategoryInput } from "../inputs/CategorizationCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateInput", {
  isAbstract: true,
})
export class CategoryCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => CategorizationCreateNestedManyWithoutCategoryInput, {
    nullable: true,
  })
  categorizations?: CategorizationCreateNestedManyWithoutCategoryInput | undefined;
}
