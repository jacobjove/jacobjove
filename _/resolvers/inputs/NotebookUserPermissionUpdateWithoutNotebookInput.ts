import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithoutNotebookInput", { isAbstract: true })
export class NotebookUserPermissionUpdateWithoutNotebookInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
