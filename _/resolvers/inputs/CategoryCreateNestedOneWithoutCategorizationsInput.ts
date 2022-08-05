import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCreateOrConnectWithoutCategorizationsInput } from "../inputs/CategoryCreateOrConnectWithoutCategorizationsInput";
import { CategoryCreateWithoutCategorizationsInput } from "../inputs/CategoryCreateWithoutCategorizationsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutCategorizationsInput", { isAbstract: true })
export class CategoryCreateNestedOneWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => CategoryCreateWithoutCategorizationsInput, { nullable: true })
  create?: CategoryCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => CategoryCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => CategoryWhereUniqueInput, { nullable: true })
  connect?: CategoryWhereUniqueInput | undefined;
}
