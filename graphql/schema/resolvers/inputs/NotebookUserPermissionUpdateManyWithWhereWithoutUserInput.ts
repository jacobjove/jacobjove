import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionScalarWhereInput } from "../inputs/NotebookUserPermissionScalarWhereInput";
import { NotebookUserPermissionUpdateManyMutationInput } from "../inputs/NotebookUserPermissionUpdateManyMutationInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionScalarWhereInput, { nullable: false })
  where!: NotebookUserPermissionScalarWhereInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyMutationInput, { nullable: false })
  data!: NotebookUserPermissionUpdateManyMutationInput;
}
