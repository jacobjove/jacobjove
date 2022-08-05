import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateOneRequiredWithoutUserPermissionsInput } from "../inputs/NotebookUpdateOneRequiredWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithoutUserInput", { isAbstract: true })
export class NotebookUserPermissionUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateOneRequiredWithoutUserPermissionsInput, {
    nullable: true,
  })
  notebook?: NotebookUpdateOneRequiredWithoutUserPermissionsInput | undefined;
}
