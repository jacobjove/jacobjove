import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ItemAvgOrderByAggregateInput } from "../inputs/ItemAvgOrderByAggregateInput";
import { ItemCountOrderByAggregateInput } from "../inputs/ItemCountOrderByAggregateInput";
import { ItemMaxOrderByAggregateInput } from "../inputs/ItemMaxOrderByAggregateInput";
import { ItemMinOrderByAggregateInput } from "../inputs/ItemMinOrderByAggregateInput";
import { ItemSumOrderByAggregateInput } from "../inputs/ItemSumOrderByAggregateInput";

@TypeGraphQL.InputType("ItemOrderByWithAggregationInput", { isAbstract: true })
export class ItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  listId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ItemCountOrderByAggregateInput, { nullable: true })
  _count?: ItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ItemAvgOrderByAggregateInput, { nullable: true })
  _avg?: ItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ItemMaxOrderByAggregateInput, { nullable: true })
  _max?: ItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ItemMinOrderByAggregateInput, { nullable: true })
  _min?: ItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ItemSumOrderByAggregateInput, { nullable: true })
  _sum?: ItemSumOrderByAggregateInput | undefined;
}
