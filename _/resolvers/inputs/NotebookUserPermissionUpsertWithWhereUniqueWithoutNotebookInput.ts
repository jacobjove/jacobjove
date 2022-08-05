import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateWithoutNotebookInput";
import { NotebookUserPermissionUpdateWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateWithoutNotebookInput, { nullable: false })
  update!: NotebookUserPermissionUpdateWithoutNotebookInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateWithoutNotebookInput, { nullable: false })
  create!: NotebookUserPermissionCreateWithoutNotebookInput;
}
