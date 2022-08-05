import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { HabitAvgOrderByAggregateInput } from "../inputs/HabitAvgOrderByAggregateInput";
import { HabitCountOrderByAggregateInput } from "../inputs/HabitCountOrderByAggregateInput";
import { HabitMaxOrderByAggregateInput } from "../inputs/HabitMaxOrderByAggregateInput";
import { HabitMinOrderByAggregateInput } from "../inputs/HabitMinOrderByAggregateInput";
import { HabitSumOrderByAggregateInput } from "../inputs/HabitSumOrderByAggregateInput";

@TypeGraphQL.InputType("HabitOrderByWithAggregationInput", { isAbstract: true })
export class HabitOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  defaultDurationInMinutes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitCountOrderByAggregateInput, { nullable: true })
  _count?: HabitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitAvgOrderByAggregateInput, { nullable: true })
  _avg?: HabitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitMaxOrderByAggregateInput, { nullable: true })
  _max?: HabitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitMinOrderByAggregateInput, { nullable: true })
  _min?: HabitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitSumOrderByAggregateInput, { nullable: true })
  _sum?: HabitSumOrderByAggregateInput | undefined;
}
