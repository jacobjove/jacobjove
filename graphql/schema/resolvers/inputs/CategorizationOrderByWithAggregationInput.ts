import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { CategorizationAvgOrderByAggregateInput } from "../inputs/CategorizationAvgOrderByAggregateInput";
import { CategorizationCountOrderByAggregateInput } from "../inputs/CategorizationCountOrderByAggregateInput";
import { CategorizationMaxOrderByAggregateInput } from "../inputs/CategorizationMaxOrderByAggregateInput";
import { CategorizationMinOrderByAggregateInput } from "../inputs/CategorizationMinOrderByAggregateInput";
import { CategorizationSumOrderByAggregateInput } from "../inputs/CategorizationSumOrderByAggregateInput";

@TypeGraphQL.InputType("CategorizationOrderByWithAggregationInput", {
  isAbstract: true,
})
export class CategorizationOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => CategorizationCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CategorizationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: CategorizationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: CategorizationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: CategorizationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategorizationSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: CategorizationSumOrderByAggregateInput | undefined;
}
