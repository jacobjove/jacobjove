import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryUpdateOneRequiredWithoutCategorizationsInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationUpdateWithoutActInput", { isAbstract: true })
export class CategorizationUpdateWithoutActInput {
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
}
