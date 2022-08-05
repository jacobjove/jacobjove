import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NotebookUserPermissionScalarWhereInput", { isAbstract: true })
export class NotebookUserPermissionScalarWhereInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  AND?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  OR?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  NOT?: NotebookUserPermissionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  notebookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
