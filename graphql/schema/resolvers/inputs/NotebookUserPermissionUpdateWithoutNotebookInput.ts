import * as TypeGraphQL from "type-graphql";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotebookPermissionsInput } from "../inputs/UserUpdateOneRequiredWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutNotebookPermissionsInput | undefined;
}
