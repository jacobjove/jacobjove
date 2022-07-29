import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCategoryArgs {
  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(() => CategoryCreateInput, { nullable: false })
  create!: CategoryCreateInput;

  @TypeGraphQL.Field(() => CategoryUpdateInput, { nullable: false })
  update!: CategoryUpdateInput;
}
