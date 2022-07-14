import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateInput } from "../../../inputs/NotebookUserPermissionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateInput, {
    nullable: false,
  })
  data!: NotebookUserPermissionCreateInput;
}
