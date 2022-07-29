import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { DashboardAvgOrderByAggregateInput } from "../inputs/DashboardAvgOrderByAggregateInput";
import { DashboardCountOrderByAggregateInput } from "../inputs/DashboardCountOrderByAggregateInput";
import { DashboardMaxOrderByAggregateInput } from "../inputs/DashboardMaxOrderByAggregateInput";
import { DashboardMinOrderByAggregateInput } from "../inputs/DashboardMinOrderByAggregateInput";
import { DashboardSumOrderByAggregateInput } from "../inputs/DashboardSumOrderByAggregateInput";

@TypeGraphQL.InputType("DashboardOrderByWithAggregationInput", {
  isAbstract: true,
})
export class DashboardOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  layouts?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isDefault?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => DashboardCountOrderByAggregateInput, { nullable: true })
  _count?: DashboardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => DashboardAvgOrderByAggregateInput, { nullable: true })
  _avg?: DashboardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => DashboardMaxOrderByAggregateInput, { nullable: true })
  _max?: DashboardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => DashboardMinOrderByAggregateInput, { nullable: true })
  _min?: DashboardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => DashboardSumOrderByAggregateInput, { nullable: true })
  _sum?: DashboardSumOrderByAggregateInput | undefined;
}
