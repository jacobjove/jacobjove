import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateInput } from "../../../inputs/NotebookUserPermissionCreateInput";
import { NotebookUserPermissionUpdateInput } from "../../../inputs/NotebookUserPermissionUpdateInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateInput, { nullable: false })
  create!: NotebookUserPermissionCreateInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateInput, { nullable: false })
  update!: NotebookUserPermissionUpdateInput;
}
