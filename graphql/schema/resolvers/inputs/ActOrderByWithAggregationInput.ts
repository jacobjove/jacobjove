import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActAvgOrderByAggregateInput } from "../inputs/ActAvgOrderByAggregateInput";
import { ActCountOrderByAggregateInput } from "../inputs/ActCountOrderByAggregateInput";
import { ActMaxOrderByAggregateInput } from "../inputs/ActMaxOrderByAggregateInput";
import { ActMinOrderByAggregateInput } from "../inputs/ActMinOrderByAggregateInput";
import { ActSumOrderByAggregateInput } from "../inputs/ActSumOrderByAggregateInput";

@TypeGraphQL.InputType("ActOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ActOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActCountOrderByAggregateInput, { nullable: true })
  _count?: ActCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActAvgOrderByAggregateInput, { nullable: true })
  _avg?: ActAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActMaxOrderByAggregateInput, { nullable: true })
  _max?: ActMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActMinOrderByAggregateInput, { nullable: true })
  _min?: ActMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActSumOrderByAggregateInput, { nullable: true })
  _sum?: ActSumOrderByAggregateInput | undefined;
}
