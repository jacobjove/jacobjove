import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { IdentityAvgOrderByAggregateInput } from "../inputs/IdentityAvgOrderByAggregateInput";
import { IdentityCountOrderByAggregateInput } from "../inputs/IdentityCountOrderByAggregateInput";
import { IdentityMaxOrderByAggregateInput } from "../inputs/IdentityMaxOrderByAggregateInput";
import { IdentityMinOrderByAggregateInput } from "../inputs/IdentityMinOrderByAggregateInput";
import { IdentitySumOrderByAggregateInput } from "../inputs/IdentitySumOrderByAggregateInput";

@TypeGraphQL.InputType("IdentityOrderByWithAggregationInput", { isAbstract: true })
export class IdentityOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => IdentityCountOrderByAggregateInput, { nullable: true })
  _count?: IdentityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentityAvgOrderByAggregateInput, { nullable: true })
  _avg?: IdentityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentityMaxOrderByAggregateInput, { nullable: true })
  _max?: IdentityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentityMinOrderByAggregateInput, { nullable: true })
  _min?: IdentityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentitySumOrderByAggregateInput, { nullable: true })
  _sum?: IdentitySumOrderByAggregateInput | undefined;
}
