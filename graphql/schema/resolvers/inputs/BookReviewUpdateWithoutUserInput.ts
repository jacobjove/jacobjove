import * as TypeGraphQL from "type-graphql";
import { BookUpdateOneRequiredWithoutBookReviewInput } from "../inputs/BookUpdateOneRequiredWithoutBookReviewInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ReadingUpdateOneWithoutReviewInput } from "../inputs/ReadingUpdateOneWithoutReviewInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookReviewUpdateWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  review?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutBookReviewInput, {
    nullable: true,
  })
  book?: BookUpdateOneRequiredWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpdateOneWithoutReviewInput, {
    nullable: true,
  })
  reading?: ReadingUpdateOneWithoutReviewInput | undefined;
}
