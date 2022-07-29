import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotebookUserPermissionScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class NotebookUserPermissionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: NotebookUserPermissionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  notebookId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
