import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionScheduleTemplateOrderByRelationAggregateInput } from "../inputs/ActionScheduleTemplateOrderByRelationAggregateInput";
import { ActOrderByRelationAggregateInput } from "../inputs/ActOrderByRelationAggregateInput";
import { CategorizationOrderByRelationAggregateInput } from "../inputs/CategorizationOrderByRelationAggregateInput";
import { HabitOrderByRelationAggregateInput } from "../inputs/HabitOrderByRelationAggregateInput";
import { IdentityActRelationOrderByRelationAggregateInput } from "../inputs/IdentityActRelationOrderByRelationAggregateInput";
import { MetricApplicationOrderByRelationAggregateInput } from "../inputs/MetricApplicationOrderByRelationAggregateInput";

@TypeGraphQL.InputType("ActOrderByWithRelationInput", { isAbstract: true })
export class ActOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByWithRelationInput, { nullable: true })
  parent?: ActOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActOrderByRelationAggregateInput, { nullable: true })
  variants?: ActOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => HabitOrderByRelationAggregateInput, { nullable: true })
  habits?: HabitOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationOrderByRelationAggregateInput, { nullable: true })
  metricApplications?: MetricApplicationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationOrderByRelationAggregateInput, {
    nullable: true,
  })
  identityRelations?: IdentityActRelationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateOrderByRelationAggregateInput, {
    nullable: true,
  })
  scheduleTemplates?: ActionScheduleTemplateOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => CategorizationOrderByRelationAggregateInput, { nullable: true })
  categorizations?: CategorizationOrderByRelationAggregateInput | undefined;
}
