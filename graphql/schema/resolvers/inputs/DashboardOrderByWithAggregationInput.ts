import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  layouts?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isDefault?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isPublic?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => DashboardCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: DashboardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: DashboardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: DashboardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: DashboardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: DashboardSumOrderByAggregateInput | undefined;
}
