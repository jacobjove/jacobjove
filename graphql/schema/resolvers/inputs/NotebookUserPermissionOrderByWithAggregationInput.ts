import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookUserPermissionAvgOrderByAggregateInput } from "../inputs/NotebookUserPermissionAvgOrderByAggregateInput";
import { NotebookUserPermissionCountOrderByAggregateInput } from "../inputs/NotebookUserPermissionCountOrderByAggregateInput";
import { NotebookUserPermissionMaxOrderByAggregateInput } from "../inputs/NotebookUserPermissionMaxOrderByAggregateInput";
import { NotebookUserPermissionMinOrderByAggregateInput } from "../inputs/NotebookUserPermissionMinOrderByAggregateInput";
import { NotebookUserPermissionSumOrderByAggregateInput } from "../inputs/NotebookUserPermissionSumOrderByAggregateInput";

@TypeGraphQL.InputType("NotebookUserPermissionOrderByWithAggregationInput", {
  isAbstract: true,
})
export class NotebookUserPermissionOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: NotebookUserPermissionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionAvgOrderByAggregateInput, { nullable: true })
  _avg?: NotebookUserPermissionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionMaxOrderByAggregateInput, { nullable: true })
  _max?: NotebookUserPermissionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionMinOrderByAggregateInput, { nullable: true })
  _min?: NotebookUserPermissionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionSumOrderByAggregateInput, { nullable: true })
  _sum?: NotebookUserPermissionSumOrderByAggregateInput | undefined;
}
