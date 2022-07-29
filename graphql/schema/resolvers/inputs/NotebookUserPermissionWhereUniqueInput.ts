import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput } from "../inputs/NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionWhereUniqueInput", {
  isAbstract: true,
})
export class NotebookUserPermissionWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput, {
    nullable: true,
  })
  userId_notebookId?: NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput | undefined;
}
