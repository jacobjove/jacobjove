import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotebookUserPermissionScalarWhereInput", {
  isAbstract: true,
})
export class NotebookUserPermissionScalarWhereInput {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  AND?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  OR?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  NOT?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
