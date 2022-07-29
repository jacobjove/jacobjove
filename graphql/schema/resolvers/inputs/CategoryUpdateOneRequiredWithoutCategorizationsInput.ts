import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateOrConnectWithoutCategorizationsInput } from "../inputs/CategoryCreateOrConnectWithoutCategorizationsInput";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryUpdateWithoutCategorizationsInput } from "../inputs/CategoryUpdateWithoutCategorizationsInput";
import { CategoryUpsertWithoutCategorizationsInput } from "../inputs/CategoryUpsertWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutCategorizationsInput", {
  isAbstract: true,
})
export class CategoryUpdateOneRequiredWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => CategoryCreateWithoutCategorizationsInput, { nullable: true })
  create?: CategoryCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => CategoryCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => CategoryUpsertWithoutCategorizationsInput, { nullable: true })
  upsert?: CategoryUpsertWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: true })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => CategoryUpdateWithoutCategorizationsInput, { nullable: true })
  update?: CategoryUpdateWithoutCategorizationsInput | undefined;
}
