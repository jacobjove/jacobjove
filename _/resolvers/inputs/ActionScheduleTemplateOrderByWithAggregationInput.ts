import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleTemplateAvgOrderByAggregateInput } from "../inputs/ActionScheduleTemplateAvgOrderByAggregateInput";
import { ActionScheduleTemplateCountOrderByAggregateInput } from "../inputs/ActionScheduleTemplateCountOrderByAggregateInput";
import { ActionScheduleTemplateMaxOrderByAggregateInput } from "../inputs/ActionScheduleTemplateMaxOrderByAggregateInput";
import { ActionScheduleTemplateMinOrderByAggregateInput } from "../inputs/ActionScheduleTemplateMinOrderByAggregateInput";
import { ActionScheduleTemplateSumOrderByAggregateInput } from "../inputs/ActionScheduleTemplateSumOrderByAggregateInput";

@TypeGraphQL.InputType("ActionScheduleTemplateOrderByWithAggregationInput", { isAbstract: true })
export class ActionScheduleTemplateOrderByWithAggregationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  scheduleTemplateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ActionScheduleTemplateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateAvgOrderByAggregateInput, { nullable: true })
  _avg?: ActionScheduleTemplateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateMaxOrderByAggregateInput, { nullable: true })
  _max?: ActionScheduleTemplateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateMinOrderByAggregateInput, { nullable: true })
  _min?: ActionScheduleTemplateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateSumOrderByAggregateInput, { nullable: true })
  _sum?: ActionScheduleTemplateSumOrderByAggregateInput | undefined;
}
