import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActionAvgOrderByAggregateInput } from "../inputs/ActionAvgOrderByAggregateInput";
import { ActionCountOrderByAggregateInput } from "../inputs/ActionCountOrderByAggregateInput";
import { ActionMaxOrderByAggregateInput } from "../inputs/ActionMaxOrderByAggregateInput";
import { ActionMinOrderByAggregateInput } from "../inputs/ActionMinOrderByAggregateInput";
import { ActionSumOrderByAggregateInput } from "../inputs/ActionSumOrderByAggregateInput";

@TypeGraphQL.InputType("ActionOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ActionOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  notes?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => ActionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ActionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActionAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ActionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ActionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ActionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActionSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ActionSumOrderByAggregateInput | undefined;
}
