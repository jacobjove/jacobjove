import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotebookUserPermissionScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class NotebookUserPermissionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  notebookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
