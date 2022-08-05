import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { GoalAvgOrderByAggregateInput } from "../inputs/GoalAvgOrderByAggregateInput";
import { GoalCountOrderByAggregateInput } from "../inputs/GoalCountOrderByAggregateInput";
import { GoalMaxOrderByAggregateInput } from "../inputs/GoalMaxOrderByAggregateInput";
import { GoalMinOrderByAggregateInput } from "../inputs/GoalMinOrderByAggregateInput";
import { GoalSumOrderByAggregateInput } from "../inputs/GoalSumOrderByAggregateInput";

@TypeGraphQL.InputType("GoalOrderByWithAggregationInput", { isAbstract: true })
export class GoalOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  goalId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => GoalCountOrderByAggregateInput, { nullable: true })
  _count?: GoalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => GoalAvgOrderByAggregateInput, { nullable: true })
  _avg?: GoalAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => GoalMaxOrderByAggregateInput, { nullable: true })
  _max?: GoalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => GoalMinOrderByAggregateInput, { nullable: true })
  _min?: GoalMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => GoalSumOrderByAggregateInput, { nullable: true })
  _sum?: GoalSumOrderByAggregateInput | undefined;
}
