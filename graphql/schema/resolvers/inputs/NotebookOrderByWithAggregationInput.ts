import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { NotebookAvgOrderByAggregateInput } from "../inputs/NotebookAvgOrderByAggregateInput";
import { NotebookCountOrderByAggregateInput } from "../inputs/NotebookCountOrderByAggregateInput";
import { NotebookMaxOrderByAggregateInput } from "../inputs/NotebookMaxOrderByAggregateInput";
import { NotebookMinOrderByAggregateInput } from "../inputs/NotebookMinOrderByAggregateInput";
import { NotebookSumOrderByAggregateInput } from "../inputs/NotebookSumOrderByAggregateInput";

@TypeGraphQL.InputType("NotebookOrderByWithAggregationInput", {
  isAbstract: true,
})
export class NotebookOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => NotebookCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: NotebookCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: NotebookAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: NotebookMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: NotebookMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: NotebookSumOrderByAggregateInput | undefined;
}
