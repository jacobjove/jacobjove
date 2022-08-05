import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookAvgOrderByAggregateInput } from "../inputs/NotebookAvgOrderByAggregateInput";
import { NotebookCountOrderByAggregateInput } from "../inputs/NotebookCountOrderByAggregateInput";
import { NotebookMaxOrderByAggregateInput } from "../inputs/NotebookMaxOrderByAggregateInput";
import { NotebookMinOrderByAggregateInput } from "../inputs/NotebookMinOrderByAggregateInput";
import { NotebookSumOrderByAggregateInput } from "../inputs/NotebookSumOrderByAggregateInput";

@TypeGraphQL.InputType("NotebookOrderByWithAggregationInput", { isAbstract: true })
export class NotebookOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => NotebookCountOrderByAggregateInput, { nullable: true })
  _count?: NotebookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookAvgOrderByAggregateInput, { nullable: true })
  _avg?: NotebookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookMaxOrderByAggregateInput, { nullable: true })
  _max?: NotebookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookMinOrderByAggregateInput, { nullable: true })
  _min?: NotebookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => NotebookSumOrderByAggregateInput, { nullable: true })
  _sum?: NotebookSumOrderByAggregateInput | undefined;
}
