import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookUserPermissionWhereUniqueInput;
}
