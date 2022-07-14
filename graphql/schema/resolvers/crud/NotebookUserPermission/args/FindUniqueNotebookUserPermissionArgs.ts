import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookUserPermissionWhereUniqueInput;
}
