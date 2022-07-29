import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateOrConnectWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateOrConnectWithoutNotebookInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateWithoutNotebookInput, {
    nullable: false,
  })
  create!: NotebookUserPermissionCreateWithoutNotebookInput;
}
