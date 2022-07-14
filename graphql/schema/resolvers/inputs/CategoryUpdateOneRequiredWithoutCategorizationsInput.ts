import * as TypeGraphQL from "type-graphql";
import { CategoryCreateOrConnectWithoutCategorizationsInput } from "../inputs/CategoryCreateOrConnectWithoutCategorizationsInput";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryUpdateWithoutCategorizationsInput } from "../inputs/CategoryUpdateWithoutCategorizationsInput";
import { CategoryUpsertWithoutCategorizationsInput } from "../inputs/CategoryUpsertWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryUpdateOneRequiredWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => CategoryCreateWithoutCategorizationsInput, {
    nullable: true,
  })
  create?: CategoryCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpsertWithoutCategorizationsInput, {
    nullable: true,
  })
  upsert?: CategoryUpsertWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutCategorizationsInput, {
    nullable: true,
  })
  update?: CategoryUpdateWithoutCategorizationsInput | undefined;
}
