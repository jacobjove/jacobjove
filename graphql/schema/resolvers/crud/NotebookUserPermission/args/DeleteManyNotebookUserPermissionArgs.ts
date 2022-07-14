import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  where?: NotebookUserPermissionWhereInput | undefined;
}
