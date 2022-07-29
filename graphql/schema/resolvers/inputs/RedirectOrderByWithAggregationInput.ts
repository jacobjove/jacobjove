import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { RedirectAvgOrderByAggregateInput } from "../inputs/RedirectAvgOrderByAggregateInput";
import { RedirectCountOrderByAggregateInput } from "../inputs/RedirectCountOrderByAggregateInput";
import { RedirectMaxOrderByAggregateInput } from "../inputs/RedirectMaxOrderByAggregateInput";
import { RedirectMinOrderByAggregateInput } from "../inputs/RedirectMinOrderByAggregateInput";
import { RedirectSumOrderByAggregateInput } from "../inputs/RedirectSumOrderByAggregateInput";

@TypeGraphQL.InputType("RedirectOrderByWithAggregationInput", {
  isAbstract: true,
})
export class RedirectOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  old_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  new_path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => RedirectCountOrderByAggregateInput, { nullable: true })
  _count?: RedirectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RedirectAvgOrderByAggregateInput, { nullable: true })
  _avg?: RedirectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RedirectMaxOrderByAggregateInput, { nullable: true })
  _max?: RedirectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RedirectMinOrderByAggregateInput, { nullable: true })
  _min?: RedirectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RedirectSumOrderByAggregateInput, { nullable: true })
  _sum?: RedirectSumOrderByAggregateInput | undefined;
}
