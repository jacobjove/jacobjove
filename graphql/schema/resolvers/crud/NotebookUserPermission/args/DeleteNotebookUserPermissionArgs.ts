import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;
}
