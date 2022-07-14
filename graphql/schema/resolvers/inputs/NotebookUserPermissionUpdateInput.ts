import * as TypeGraphQL from "type-graphql";
import { NotebookUpdateOneRequiredWithoutUserPermissionsInput } from "../inputs/NotebookUpdateOneRequiredWithoutUserPermissionsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotebookPermissionsInput } from "../inputs/UserUpdateOneRequiredWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateOneRequiredWithoutUserPermissionsInput, {
    nullable: true,
  })
  notebook?: NotebookUpdateOneRequiredWithoutUserPermissionsInput | undefined;
}
