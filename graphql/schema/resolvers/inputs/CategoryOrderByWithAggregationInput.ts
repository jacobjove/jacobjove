import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { CategoryAvgOrderByAggregateInput } from "../inputs/CategoryAvgOrderByAggregateInput";
import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
import { CategorySumOrderByAggregateInput } from "../inputs/CategorySumOrderByAggregateInput";

@TypeGraphQL.InputType("CategoryOrderByWithAggregationInput", {
  isAbstract: true,
})
export class CategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => CategoryCountOrderByAggregateInput, { nullable: true })
  _count?: CategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryAvgOrderByAggregateInput, { nullable: true })
  _avg?: CategoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryMaxOrderByAggregateInput, { nullable: true })
  _max?: CategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryMinOrderByAggregateInput, { nullable: true })
  _min?: CategoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategorySumOrderByAggregateInput, { nullable: true })
  _sum?: CategorySumOrderByAggregateInput | undefined;
}
