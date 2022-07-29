import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionScalarWhereInput } from "../inputs/NotebookUserPermissionScalarWhereInput";
import { NotebookUserPermissionUpdateManyMutationInput } from "../inputs/NotebookUserPermissionUpdateManyMutationInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionScalarWhereInput, { nullable: false })
  where!: NotebookUserPermissionScalarWhereInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateManyMutationInput, { nullable: false })
  data!: NotebookUserPermissionUpdateManyMutationInput;
}
