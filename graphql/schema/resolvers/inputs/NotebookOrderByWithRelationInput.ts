import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookUserPermissionOrderByRelationAggregateInput } from "../inputs/NotebookUserPermissionOrderByRelationAggregateInput";
import { NoteOrderByRelationAggregateInput } from "../inputs/NoteOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@TypeGraphQL.InputType("NotebookOrderByWithRelationInput", {
  isAbstract: true,
})
export class NotebookOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, { nullable: true })
  owner?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => NoteOrderByRelationAggregateInput, { nullable: true })
  notes?: NoteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionOrderByRelationAggregateInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
