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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CategoryCountOrderByAggregateInput, { nullable: true })
  _count?: CategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategoryAvgOrderByAggregateInput, { nullable: true })
  _avg?: CategoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategoryMaxOrderByAggregateInput, { nullable: true })
  _max?: CategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategoryMinOrderByAggregateInput, { nullable: true })
  _min?: CategoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorySumOrderByAggregateInput, { nullable: true })
  _sum?: CategorySumOrderByAggregateInput | undefined;
}
