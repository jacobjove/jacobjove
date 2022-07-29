import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionWhereInput } from "../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.InputType("NotebookUserPermissionListRelationFilter", {
  isAbstract: true,
})
export class NotebookUserPermissionListRelationFilter {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  every?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  some?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  none?: NotebookUserPermissionWhereInput | undefined;
}
