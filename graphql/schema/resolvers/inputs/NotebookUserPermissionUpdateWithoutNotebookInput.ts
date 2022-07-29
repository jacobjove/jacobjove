import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserUpdateOneRequiredWithoutNotebookPermissionsInput } from "../inputs/UserUpdateOneRequiredWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateWithoutNotebookInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutNotebookPermissionsInput | undefined;
}
