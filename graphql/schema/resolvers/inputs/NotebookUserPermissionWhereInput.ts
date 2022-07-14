import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookRelationFilter } from "../inputs/NotebookRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NotebookUserPermissionWhereInput", {
  isAbstract: true,
})
export class NotebookUserPermissionWhereInput {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereInput], {
    nullable: true,
  })
  AND?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereInput], {
    nullable: true,
  })
  OR?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereInput], {
    nullable: true,
  })
  NOT?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => NotebookRelationFilter, {
    nullable: true,
  })
  notebook?: NotebookRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
