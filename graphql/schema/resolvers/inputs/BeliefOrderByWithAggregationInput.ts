import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  slug?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => BeliefCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: BeliefCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: BeliefAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: BeliefMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: BeliefMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: BeliefSumOrderByAggregateInput | undefined;
}
