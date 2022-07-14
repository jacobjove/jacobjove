import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOrConnectWithoutCategorizationsInput } from "../inputs/CategoryCreateOrConnectWithoutCategorizationsInput";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryCreateNestedOneWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategorizationsInput, {
    nullable: true,
  })
  create?: CategoryCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
