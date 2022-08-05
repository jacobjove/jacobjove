import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookOrderByWithRelationInput } from "../inputs/NotebookOrderByWithRelationInput";

@TypeGraphQL.InputType("NotebookUserPermissionOrderByWithRelationInput", { isAbstract: true })
export class NotebookUserPermissionOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => NotebookOrderByWithRelationInput, { nullable: true })
  notebook?: NotebookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
