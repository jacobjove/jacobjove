import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NotebookRelationFilter } from "../inputs/NotebookRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotebookUserPermissionWhereInput", { isAbstract: true })
export class NotebookUserPermissionWhereInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereInput], { nullable: true })
  AND?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereInput], { nullable: true })
  OR?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereInput], { nullable: true })
  NOT?: NotebookUserPermissionWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => NotebookRelationFilter, { nullable: true })
  notebook?: NotebookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
