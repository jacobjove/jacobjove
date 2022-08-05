import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUpdateManyWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateManyWithoutNotebookInput";

@TypeGraphQL.InputType("NotebookUpdateWithoutNotesInput", { isAbstract: true })
export class NotebookUpdateWithoutNotesInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateManyWithoutNotebookInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionUpdateManyWithoutNotebookInput | undefined;
}
