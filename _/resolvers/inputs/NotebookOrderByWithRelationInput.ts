import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookUserPermissionOrderByRelationAggregateInput } from "../inputs/NotebookUserPermissionOrderByRelationAggregateInput";
import { NoteOrderByRelationAggregateInput } from "../inputs/NoteOrderByRelationAggregateInput";

@TypeGraphQL.InputType("NotebookOrderByWithRelationInput", { isAbstract: true })
export class NotebookOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => NoteOrderByRelationAggregateInput, { nullable: true })
  notes?: NoteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionOrderByRelationAggregateInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
