import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookUserPermissionListRelationFilter } from "../inputs/NotebookUserPermissionListRelationFilter";
import { NoteListRelationFilter } from "../inputs/NoteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("NotebookWhereInput", { isAbstract: true })
export class NotebookWhereInput {
  @TypeGraphQL.Field(() => [NotebookWhereInput], { nullable: true })
  AND?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereInput], { nullable: true })
  OR?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookWhereInput], { nullable: true })
  NOT?: NotebookWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => NoteListRelationFilter, { nullable: true })
  notes?: NoteListRelationFilter | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionListRelationFilter, { nullable: true })
  userPermissions?: NotebookUserPermissionListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
