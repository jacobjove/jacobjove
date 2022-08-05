import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateOneRequiredWithoutCategorizationsInput } from "../inputs/ActUpdateOneRequiredWithoutCategorizationsInput";
import { CategoryUpdateOneRequiredWithoutCategorizationsInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationUpdateInput", { isAbstract: true })
export class CategorizationUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => CategoryUpdateOneRequiredWithoutCategorizationsInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutCategorizationsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutCategorizationsInput | undefined;
}
