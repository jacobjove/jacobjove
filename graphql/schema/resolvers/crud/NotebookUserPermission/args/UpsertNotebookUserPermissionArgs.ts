import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateInput } from "../../../inputs/NotebookUserPermissionCreateInput";
import { NotebookUserPermissionUpdateInput } from "../../../inputs/NotebookUserPermissionUpdateInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateInput, {
    nullable: false,
  })
  create!: NotebookUserPermissionCreateInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateInput, {
    nullable: false,
  })
  update!: NotebookUserPermissionUpdateInput;
}
