import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUpdateInput } from "../../../inputs/NotebookUserPermissionUpdateInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateInput, { nullable: false })
  data!: NotebookUserPermissionUpdateInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;
}
