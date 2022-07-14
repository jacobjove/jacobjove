import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { GoalOrderByRelationAggregateInput } from "../inputs/GoalOrderByRelationAggregateInput";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";

@TypeGraphQL.InputType("GoalOrderByWithRelationInput", {
  isAbstract: true,
})
export class GoalOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByWithRelationInput, {
    nullable: true,
  })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  goalId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => GoalOrderByWithRelationInput, {
    nullable: true,
  })
  goal?: GoalOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => GoalOrderByRelationAggregateInput, {
    nullable: true,
  })
  milestones?: GoalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  quantity?: "asc" | "desc" | undefined;
}
