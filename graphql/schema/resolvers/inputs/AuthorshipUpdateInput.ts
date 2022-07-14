import * as TypeGraphQL from "type-graphql";
import { AuthorUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/AuthorUpdateOneRequiredWithoutAuthorshipsInput";
import { BookUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorshipsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorshipUpdateInput", {
  isAbstract: true,
})
export class AuthorshipUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  position?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => AuthorUpdateOneRequiredWithoutAuthorshipsInput, {
    nullable: true,
  })
  author?: AuthorUpdateOneRequiredWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutAuthorshipsInput, {
    nullable: true,
  })
  book?: BookUpdateOneRequiredWithoutAuthorshipsInput | undefined;
}
