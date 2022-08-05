import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { GoalOrderByRelationAggregateInput } from "../inputs/GoalOrderByRelationAggregateInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";

@TypeGraphQL.InputType("GoalOrderByWithRelationInput", { isAbstract: true })
export class GoalOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitOrderByWithRelationInput, { nullable: true })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  goalId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => GoalOrderByWithRelationInput, { nullable: true })
  goal?: GoalOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => GoalOrderByRelationAggregateInput, { nullable: true })
  milestones?: GoalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;
}
