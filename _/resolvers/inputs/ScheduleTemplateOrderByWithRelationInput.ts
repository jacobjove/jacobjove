import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleTemplateOrderByRelationAggregateInput } from "../inputs/ActionScheduleTemplateOrderByRelationAggregateInput";

@TypeGraphQL.InputType("ScheduleTemplateOrderByWithRelationInput", { isAbstract: true })
export class ScheduleTemplateOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  multiplier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  chron?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateOrderByRelationAggregateInput, {
    nullable: true,
  })
  actionScheduleTemplates?: ActionScheduleTemplateOrderByRelationAggregateInput | undefined;
}
