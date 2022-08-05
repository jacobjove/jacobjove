import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ListAvgOrderByAggregateInput } from "../inputs/ListAvgOrderByAggregateInput";
import { ListCountOrderByAggregateInput } from "../inputs/ListCountOrderByAggregateInput";
import { ListMaxOrderByAggregateInput } from "../inputs/ListMaxOrderByAggregateInput";
import { ListMinOrderByAggregateInput } from "../inputs/ListMinOrderByAggregateInput";
import { ListSumOrderByAggregateInput } from "../inputs/ListSumOrderByAggregateInput";

@TypeGraphQL.InputType("ListOrderByWithAggregationInput", { isAbstract: true })
export class ListOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ListCountOrderByAggregateInput, { nullable: true })
  _count?: ListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ListAvgOrderByAggregateInput, { nullable: true })
  _avg?: ListAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ListMaxOrderByAggregateInput, { nullable: true })
  _max?: ListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ListMinOrderByAggregateInput, { nullable: true })
  _min?: ListMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ListSumOrderByAggregateInput, { nullable: true })
  _sum?: ListSumOrderByAggregateInput | undefined;
}
