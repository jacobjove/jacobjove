import * as TypeGraphQL from "type-graphql";
import { NotebookUpdateOneRequiredWithoutUserPermissionsInput } from "../inputs/NotebookUpdateOneRequiredWithoutUserPermissionsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateWithoutUserInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateOneRequiredWithoutUserPermissionsInput, {
    nullable: true,
  })
  notebook?: NotebookUpdateOneRequiredWithoutUserPermissionsInput | undefined;
}
