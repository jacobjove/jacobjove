import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => CategorizationCountOrderByAggregateInput, { nullable: true })
  _count?: CategorizationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorizationAvgOrderByAggregateInput, { nullable: true })
  _avg?: CategorizationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorizationMaxOrderByAggregateInput, { nullable: true })
  _max?: CategorizationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorizationMinOrderByAggregateInput, { nullable: true })
  _min?: CategorizationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorizationSumOrderByAggregateInput, { nullable: true })
  _sum?: CategorizationSumOrderByAggregateInput | undefined;
}
