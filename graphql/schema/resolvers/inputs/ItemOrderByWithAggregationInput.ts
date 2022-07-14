import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ItemAvgOrderByAggregateInput } from "../inputs/ItemAvgOrderByAggregateInput";
import { ItemCountOrderByAggregateInput } from "../inputs/ItemCountOrderByAggregateInput";
import { ItemMaxOrderByAggregateInput } from "../inputs/ItemMaxOrderByAggregateInput";
import { ItemMinOrderByAggregateInput } from "../inputs/ItemMinOrderByAggregateInput";
import { ItemSumOrderByAggregateInput } from "../inputs/ItemSumOrderByAggregateInput";

@TypeGraphQL.InputType("ItemOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ItemOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  listId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  data?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => ItemCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ItemAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ItemMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ItemMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ItemSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ItemSumOrderByAggregateInput | undefined;
}
