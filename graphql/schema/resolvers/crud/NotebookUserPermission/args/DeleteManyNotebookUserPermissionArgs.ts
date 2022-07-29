import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  where?: NotebookUserPermissionWhereInput | undefined;
}
