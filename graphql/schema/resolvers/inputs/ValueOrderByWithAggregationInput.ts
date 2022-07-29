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

  @TypeGraphQL.Field(() => ValueCountOrderByAggregateInput, { nullable: true })
  _count?: ValueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ValueAvgOrderByAggregateInput, { nullable: true })
  _avg?: ValueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ValueMaxOrderByAggregateInput, { nullable: true })
  _max?: ValueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ValueMinOrderByAggregateInput, { nullable: true })
  _min?: ValueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ValueSumOrderByAggregateInput, { nullable: true })
  _sum?: ValueSumOrderByAggregateInput | undefined;
}
