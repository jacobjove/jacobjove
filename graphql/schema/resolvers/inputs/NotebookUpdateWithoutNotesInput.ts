import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NotebookUserPermissionUpdateManyWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutNotebookInput";
import { UserUpdateOneRequiredWithoutNotebooksInput } from "../inputs/UserUpdateOneRequiredWithoutNotebooksInput";

@TypeGraphQL.InputType("NotebookUpdateWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookUpdateWithoutNotesInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutNotebooksInput, { nullable: true })
  owner?: UserUpdateOneRequiredWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyWithoutNotebookInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionUpdateManyWithoutNotebookInput | undefined;
}
