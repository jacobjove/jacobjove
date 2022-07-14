import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleOrderByRelationAggregateInput } from "../inputs/ActionScheduleOrderByRelationAggregateInput";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { ScheduleTemplateOrderByWithRelationInput } from "../inputs/ScheduleTemplateOrderByWithRelationInput";

@TypeGraphQL.InputType("ActionScheduleTemplateOrderByWithRelationInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActOrderByWithRelationInput, {
    nullable: true,
  })
  act?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ScheduleTemplateOrderByWithRelationInput, {
    nullable: true,
  })
  scheduleTemplate?: ScheduleTemplateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  scheduleTemplateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleOrderByRelationAggregateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleOrderByRelationAggregateInput | undefined;
}
