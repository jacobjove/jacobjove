import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookUserPermissionListRelationFilter } from "../inputs/NotebookUserPermissionListRelationFilter";
import { NoteListRelationFilter } from "../inputs/NoteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NotebookWhereInput", {
  isAbstract: true,
})
export class NotebookWhereInput {
  @TypeGraphQL.Field((_type) => [NotebookWhereInput], { nullable: true })
  AND?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereInput], { nullable: true })
  OR?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookWhereInput], { nullable: true })
  NOT?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, { nullable: true })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => NoteListRelationFilter, { nullable: true })
  notes?: NoteListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionListRelationFilter, { nullable: true })
  userPermissions?: NotebookUserPermissionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
