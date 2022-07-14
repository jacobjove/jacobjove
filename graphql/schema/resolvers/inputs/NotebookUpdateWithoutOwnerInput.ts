import * as TypeGraphQL from "type-graphql";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotebookUserPermissionUpdateManyWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutNotebookInput";
import { NoteUpdateManyWithoutNotebookInput } from "../inputs/NoteUpdateManyWithoutNotebookInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotebookUpdateWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpdateWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => NoteUpdateManyWithoutNotebookInput, {
    nullable: true,
  })
  notes?: NoteUpdateManyWithoutNotebookInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyWithoutNotebookInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionUpdateManyWithoutNotebookInput | undefined;
}
