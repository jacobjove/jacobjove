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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  notebookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: NotebookUserPermissionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionAvgOrderByAggregateInput, { nullable: true })
  _avg?: NotebookUserPermissionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionMaxOrderByAggregateInput, { nullable: true })
  _max?: NotebookUserPermissionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionMinOrderByAggregateInput, { nullable: true })
  _min?: NotebookUserPermissionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionSumOrderByAggregateInput, { nullable: true })
  _sum?: NotebookUserPermissionSumOrderByAggregateInput | undefined;
}
