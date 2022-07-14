import * as TypeGraphQL from "type-graphql";
import { CategoryUpdateOneRequiredWithoutCategorizationsInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategorizationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategorizationUpdateWithoutActInput", {
  isAbstract: true,
})
export class CategorizationUpdateWithoutActInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpdateOneRequiredWithoutCategorizationsInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutCategorizationsInput | undefined;
}
