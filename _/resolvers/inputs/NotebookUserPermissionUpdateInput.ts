import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateInput", { isAbstract: true })
export class NotebookUserPermissionUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
