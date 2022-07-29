import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryCreateOrConnectWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(() => CategoryCreateWithoutCategorizationsInput, { nullable: false })
  create!: CategoryCreateWithoutCategorizationsInput;
}
