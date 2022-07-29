import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutCategorizationsInput } from "../inputs/ActUpdateOneRequiredWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationUpdateWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationUpdateWithoutCategoryInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutCategorizationsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutCategorizationsInput | undefined;
}
