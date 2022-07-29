import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateOneRequiredWithoutUserPermissionsInput } from "../inputs/NotebookUpdateOneRequiredWithoutUserPermissionsInput";
import { UserUpdateOneRequiredWithoutNotebookPermissionsInput } from "../inputs/UserUpdateOneRequiredWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateOneRequiredWithoutUserPermissionsInput, {
    nullable: true,
  })
  notebook?: NotebookUpdateOneRequiredWithoutUserPermissionsInput | undefined;
}
