import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleOrderByRelationAggregateInput } from "../inputs/ActionScheduleOrderByRelationAggregateInput";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { ScheduleTemplateOrderByWithRelationInput } from "../inputs/ScheduleTemplateOrderByWithRelationInput";

@TypeGraphQL.InputType("ActionScheduleTemplateOrderByWithRelationInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByWithRelationInput, { nullable: true })
  act?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateOrderByWithRelationInput, { nullable: true })
  scheduleTemplate?: ScheduleTemplateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  scheduleTemplateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleOrderByRelationAggregateInput, { nullable: true })
  actionSchedules?: ActionScheduleOrderByRelationAggregateInput | undefined;
}
