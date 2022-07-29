import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { NoteUpdateManyWithoutNotebookInput } from "../inputs/NoteUpdateManyWithoutNotebookInput";
import { UserUpdateOneRequiredWithoutNotebooksInput } from "../inputs/UserUpdateOneRequiredWithoutNotebooksInput";

@TypeGraphQL.InputType("NotebookUpdateWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookUpdateWithoutUserPermissionsInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutNotebooksInput, { nullable: true })
  owner?: UserUpdateOneRequiredWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => NoteUpdateManyWithoutNotebookInput, { nullable: true })
  notes?: NoteUpdateManyWithoutNotebookInput | undefined;
}
