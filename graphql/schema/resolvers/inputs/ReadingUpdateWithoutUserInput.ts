import * as TypeGraphQL from "type-graphql";
import { BookReviewUpdateOneWithoutReadingInput } from "../inputs/BookReviewUpdateOneWithoutReadingInput";
import { BookUpdateOneRequiredWithoutReadingsInput } from "../inputs/BookUpdateOneRequiredWithoutReadingsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReadingUpdateWithoutUserInput", {
  isAbstract: true,
})
export class ReadingUpdateWithoutUserInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  dateStarted?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  dateFinished?: NullableDateTimeFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutReadingsInput, {
    nullable: true,
  })
  book?: BookUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateOneWithoutReadingInput, {
    nullable: true,
  })
  review?: BookReviewUpdateOneWithoutReadingInput | undefined;
}
