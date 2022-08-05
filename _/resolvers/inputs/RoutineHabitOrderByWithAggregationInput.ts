import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { RoutineHabitAvgOrderByAggregateInput } from "../inputs/RoutineHabitAvgOrderByAggregateInput";
import { RoutineHabitCountOrderByAggregateInput } from "../inputs/RoutineHabitCountOrderByAggregateInput";
import { RoutineHabitMaxOrderByAggregateInput } from "../inputs/RoutineHabitMaxOrderByAggregateInput";
import { RoutineHabitMinOrderByAggregateInput } from "../inputs/RoutineHabitMinOrderByAggregateInput";
import { RoutineHabitSumOrderByAggregateInput } from "../inputs/RoutineHabitSumOrderByAggregateInput";

@TypeGraphQL.InputType("RoutineHabitOrderByWithAggregationInput", { isAbstract: true })
export class RoutineHabitOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  routineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  durationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCountOrderByAggregateInput, { nullable: true })
  _count?: RoutineHabitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitAvgOrderByAggregateInput, { nullable: true })
  _avg?: RoutineHabitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitMaxOrderByAggregateInput, { nullable: true })
  _max?: RoutineHabitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitMinOrderByAggregateInput, { nullable: true })
  _min?: RoutineHabitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitSumOrderByAggregateInput, { nullable: true })
  _sum?: RoutineHabitSumOrderByAggregateInput | undefined;
}
