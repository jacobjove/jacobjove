import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { HabitAvgOrderByAggregateInput } from "../inputs/HabitAvgOrderByAggregateInput";
import { HabitCountOrderByAggregateInput } from "../inputs/HabitCountOrderByAggregateInput";
import { HabitMaxOrderByAggregateInput } from "../inputs/HabitMaxOrderByAggregateInput";
import { HabitMinOrderByAggregateInput } from "../inputs/HabitMinOrderByAggregateInput";
import { HabitSumOrderByAggregateInput } from "../inputs/HabitSumOrderByAggregateInput";

@TypeGraphQL.InputType("HabitOrderByWithAggregationInput", {
  isAbstract: true,
})
export class HabitOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  isPublic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  defaultDurationInMinutes?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => HabitCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: HabitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => HabitAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: HabitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => HabitMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: HabitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => HabitMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: HabitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => HabitSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: HabitSumOrderByAggregateInput | undefined;
}
