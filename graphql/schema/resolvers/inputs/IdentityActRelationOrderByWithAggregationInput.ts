import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { IdentityActRelationAvgOrderByAggregateInput } from "../inputs/IdentityActRelationAvgOrderByAggregateInput";
import { IdentityActRelationCountOrderByAggregateInput } from "../inputs/IdentityActRelationCountOrderByAggregateInput";
import { IdentityActRelationMaxOrderByAggregateInput } from "../inputs/IdentityActRelationMaxOrderByAggregateInput";
import { IdentityActRelationMinOrderByAggregateInput } from "../inputs/IdentityActRelationMinOrderByAggregateInput";
import { IdentityActRelationSumOrderByAggregateInput } from "../inputs/IdentityActRelationSumOrderByAggregateInput";

@TypeGraphQL.InputType("IdentityActRelationOrderByWithAggregationInput", {
  isAbstract: true,
})
export class IdentityActRelationOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  identityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationCountOrderByAggregateInput, { nullable: true })
  _count?: IdentityActRelationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationAvgOrderByAggregateInput, { nullable: true })
  _avg?: IdentityActRelationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationMaxOrderByAggregateInput, { nullable: true })
  _max?: IdentityActRelationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationMinOrderByAggregateInput, { nullable: true })
  _min?: IdentityActRelationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationSumOrderByAggregateInput, { nullable: true })
  _sum?: IdentityActRelationSumOrderByAggregateInput | undefined;
}
