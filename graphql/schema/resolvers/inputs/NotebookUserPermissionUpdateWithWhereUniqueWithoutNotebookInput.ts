import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUpdateWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateWithoutNotebookInput, {
    nullable: false,
  })
  data!: NotebookUserPermissionUpdateWithoutNotebookInput;
}
