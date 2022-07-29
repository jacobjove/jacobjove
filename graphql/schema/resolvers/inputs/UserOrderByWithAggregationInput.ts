import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";

@TypeGraphQL.InputType("UserOrderByWithAggregationInput", {
  isAbstract: true,
})
export class UserOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  settings?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  lastLogin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: UserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => UserAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: UserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => UserSumOrderByAggregateInput, { nullable: true })
  _sum?: UserSumOrderByAggregateInput | undefined;
}
