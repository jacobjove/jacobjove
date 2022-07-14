import * as TypeGraphQL from "type-graphql";
import { BookshelfUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookshelfUpdateOneRequiredWithoutShelvingsInput";
import { BookUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookUpdateOneRequiredWithoutShelvingsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ShelvingUpdateInput", {
  isAbstract: true,
})
export class ShelvingUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  rationale?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutShelvingsInput, {
    nullable: true,
  })
  book?: BookUpdateOneRequiredWithoutShelvingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookshelfUpdateOneRequiredWithoutShelvingsInput, {
    nullable: true,
  })
  shelf?: BookshelfUpdateOneRequiredWithoutShelvingsInput | undefined;
}
