import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { RoutineAvgOrderByAggregateInput } from "../inputs/RoutineAvgOrderByAggregateInput";
import { RoutineCountOrderByAggregateInput } from "../inputs/RoutineCountOrderByAggregateInput";
import { RoutineMaxOrderByAggregateInput } from "../inputs/RoutineMaxOrderByAggregateInput";
import { RoutineMinOrderByAggregateInput } from "../inputs/RoutineMinOrderByAggregateInput";
import { RoutineSumOrderByAggregateInput } from "../inputs/RoutineSumOrderByAggregateInput";

@TypeGraphQL.InputType("RoutineOrderByWithAggregationInput", {
  isAbstract: true,
})
export class RoutineOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  durationInMinutes?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => RoutineCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: RoutineCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: RoutineAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: RoutineMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: RoutineMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: RoutineSumOrderByAggregateInput | undefined;
}
