import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookshelfUpdateOneRequiredWithoutShelvingsInput";
import { BookUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookUpdateOneRequiredWithoutShelvingsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ShelvingUpdateInput", {
  isAbstract: true,
})
export class ShelvingUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  rationale?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutShelvingsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpdateOneRequiredWithoutShelvingsInput, { nullable: true })
  shelf?: BookshelfUpdateOneRequiredWithoutShelvingsInput | undefined;
}
