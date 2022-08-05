import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyMutationInput", { isAbstract: true })
export class NotebookUserPermissionUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
