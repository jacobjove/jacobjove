import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ValueAvgOrderByAggregateInput } from "../inputs/ValueAvgOrderByAggregateInput";
import { ValueCountOrderByAggregateInput } from "../inputs/ValueCountOrderByAggregateInput";
import { ValueMaxOrderByAggregateInput } from "../inputs/ValueMaxOrderByAggregateInput";
import { ValueMinOrderByAggregateInput } from "../inputs/ValueMinOrderByAggregateInput";
import { ValueSumOrderByAggregateInput } from "../inputs/ValueSumOrderByAggregateInput";

@TypeGraphQL.InputType("ValueOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ValueOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ValueCountOrderByAggregateInput, { nullable: true })
  _count?: ValueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ValueAvgOrderByAggregateInput, { nullable: true })
  _avg?: ValueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ValueMaxOrderByAggregateInput, { nullable: true })
  _max?: ValueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ValueMinOrderByAggregateInput, { nullable: true })
  _min?: ValueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ValueSumOrderByAggregateInput, { nullable: true })
  _sum?: ValueSumOrderByAggregateInput | undefined;
}
