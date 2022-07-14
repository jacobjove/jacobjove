import * as TypeGraphQL from "type-graphql";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryCreateOrConnectWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategorizationsInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutCategorizationsInput;
}
