import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { AccountAvgOrderByAggregateInput } from "../inputs/AccountAvgOrderByAggregateInput";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { AccountSumOrderByAggregateInput } from "../inputs/AccountSumOrderByAggregateInput";

@TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {
  isAbstract: true,
})
export class AccountOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  remoteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  scopes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  accessToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  refreshToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  accessTokenExpiry?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  syncToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AccountCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AccountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AccountAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: AccountAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AccountMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AccountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AccountMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AccountMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AccountSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: AccountSumOrderByAggregateInput | undefined;
}
