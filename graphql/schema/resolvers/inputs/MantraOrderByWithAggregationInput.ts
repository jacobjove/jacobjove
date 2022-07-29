import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { MantraAvgOrderByAggregateInput } from "../inputs/MantraAvgOrderByAggregateInput";
import { MantraCountOrderByAggregateInput } from "../inputs/MantraCountOrderByAggregateInput";
import { MantraMaxOrderByAggregateInput } from "../inputs/MantraMaxOrderByAggregateInput";
import { MantraMinOrderByAggregateInput } from "../inputs/MantraMinOrderByAggregateInput";
import { MantraSumOrderByAggregateInput } from "../inputs/MantraSumOrderByAggregateInput";

@TypeGraphQL.InputType("MantraOrderByWithAggregationInput", {
  isAbstract: true,
})
export class MantraOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MantraCountOrderByAggregateInput, { nullable: true })
  _count?: MantraCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MantraAvgOrderByAggregateInput, { nullable: true })
  _avg?: MantraAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MantraMaxOrderByAggregateInput, { nullable: true })
  _max?: MantraMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MantraMinOrderByAggregateInput, { nullable: true })
  _min?: MantraMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MantraSumOrderByAggregateInput, { nullable: true })
  _sum?: MantraSumOrderByAggregateInput | undefined;
}
