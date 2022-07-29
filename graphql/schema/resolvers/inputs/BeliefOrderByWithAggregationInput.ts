import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { BeliefAvgOrderByAggregateInput } from "../inputs/BeliefAvgOrderByAggregateInput";
import { BeliefCountOrderByAggregateInput } from "../inputs/BeliefCountOrderByAggregateInput";
import { BeliefMaxOrderByAggregateInput } from "../inputs/BeliefMaxOrderByAggregateInput";
import { BeliefMinOrderByAggregateInput } from "../inputs/BeliefMinOrderByAggregateInput";
import { BeliefSumOrderByAggregateInput } from "../inputs/BeliefSumOrderByAggregateInput";

@TypeGraphQL.InputType("BeliefOrderByWithAggregationInput", {
  isAbstract: true,
})
export class BeliefOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => BeliefCountOrderByAggregateInput, { nullable: true })
  _count?: BeliefCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BeliefAvgOrderByAggregateInput, { nullable: true })
  _avg?: BeliefAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BeliefMaxOrderByAggregateInput, { nullable: true })
  _max?: BeliefMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BeliefMinOrderByAggregateInput, { nullable: true })
  _min?: BeliefMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => BeliefSumOrderByAggregateInput, { nullable: true })
  _sum?: BeliefSumOrderByAggregateInput | undefined;
}
