import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ListAvgOrderByAggregateInput } from "../inputs/ListAvgOrderByAggregateInput";
import { ListCountOrderByAggregateInput } from "../inputs/ListCountOrderByAggregateInput";
import { ListMaxOrderByAggregateInput } from "../inputs/ListMaxOrderByAggregateInput";
import { ListMinOrderByAggregateInput } from "../inputs/ListMinOrderByAggregateInput";
import { ListSumOrderByAggregateInput } from "../inputs/ListSumOrderByAggregateInput";

@TypeGraphQL.InputType("ListOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ListOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  ownerId?: "asc" | "desc" | undefined;

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
  fields?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => ListCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ListAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ListAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ListMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ListMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ListMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ListSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ListSumOrderByAggregateInput | undefined;
}
