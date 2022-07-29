import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleAvgOrderByAggregateInput } from "../inputs/ActionScheduleAvgOrderByAggregateInput";
import { ActionScheduleCountOrderByAggregateInput } from "../inputs/ActionScheduleCountOrderByAggregateInput";
import { ActionScheduleMaxOrderByAggregateInput } from "../inputs/ActionScheduleMaxOrderByAggregateInput";
import { ActionScheduleMinOrderByAggregateInput } from "../inputs/ActionScheduleMinOrderByAggregateInput";
import { ActionScheduleSumOrderByAggregateInput } from "../inputs/ActionScheduleSumOrderByAggregateInput";

@TypeGraphQL.InputType("ActionScheduleOrderByWithAggregationInput", {
  isAbstract: true,
})
export class ActionScheduleOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  templateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCountOrderByAggregateInput, { nullable: true })
  _count?: ActionScheduleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleAvgOrderByAggregateInput, { nullable: true })
  _avg?: ActionScheduleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleMaxOrderByAggregateInput, { nullable: true })
  _max?: ActionScheduleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleMinOrderByAggregateInput, { nullable: true })
  _min?: ActionScheduleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleSumOrderByAggregateInput, { nullable: true })
  _sum?: ActionScheduleSumOrderByAggregateInput | undefined;
}
