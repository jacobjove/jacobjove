import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionWhereInput } from "../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.InputType("NotebookUserPermissionListRelationFilter", {
  isAbstract: true,
})
export class NotebookUserPermissionListRelationFilter {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  every?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  some?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  none?: NotebookUserPermissionWhereInput | undefined;
}
