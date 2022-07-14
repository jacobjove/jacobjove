import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { RoutineHabitAvgOrderByAggregateInput } from "../inputs/RoutineHabitAvgOrderByAggregateInput";
import { RoutineHabitCountOrderByAggregateInput } from "../inputs/RoutineHabitCountOrderByAggregateInput";
import { RoutineHabitMaxOrderByAggregateInput } from "../inputs/RoutineHabitMaxOrderByAggregateInput";
import { RoutineHabitMinOrderByAggregateInput } from "../inputs/RoutineHabitMinOrderByAggregateInput";
import { RoutineHabitSumOrderByAggregateInput } from "../inputs/RoutineHabitSumOrderByAggregateInput";

@TypeGraphQL.InputType("RoutineHabitOrderByWithAggregationInput", {
  isAbstract: true,
})
export class RoutineHabitOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  routineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  durationInMinutes?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field((_type) => RoutineHabitCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: RoutineHabitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: RoutineHabitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: RoutineHabitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: RoutineHabitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: RoutineHabitSumOrderByAggregateInput | undefined;
}
