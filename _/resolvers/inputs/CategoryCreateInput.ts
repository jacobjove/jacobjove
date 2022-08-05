import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategorizationCreateNestedManyWithoutCategoryInput } from "../inputs/CategorizationCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateInput", { isAbstract: true })
export class CategoryCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateNestedManyWithoutCategoryInput, {
    nullable: true,
  })
  categorizations?: CategorizationCreateNestedManyWithoutCategoryInput | undefined;
}
