import * as TypeGraphQL from "type-graphql";
import { BookReviewUpdateOneWithoutReadingInput } from "../inputs/BookReviewUpdateOneWithoutReadingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReadingsInput } from "../inputs/UserUpdateOneRequiredWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingUpdateWithoutBookInput", {
  isAbstract: true,
})
export class ReadingUpdateWithoutBookInput {
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

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutReadingsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateOneWithoutReadingInput, {
    nullable: true,
  })
  review?: BookReviewUpdateOneWithoutReadingInput | undefined;
}
