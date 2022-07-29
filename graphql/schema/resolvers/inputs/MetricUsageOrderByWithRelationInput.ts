import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { MetricOrderByWithRelationInput } from "../inputs/MetricOrderByWithRelationInput";
import { MetricRecordOrderByRelationAggregateInput } from "../inputs/MetricRecordOrderByRelationAggregateInput";

@TypeGraphQL.InputType("MetricUsageOrderByWithRelationInput", {
  isAbstract: true,
})
export class MetricUsageOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  metricId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => MetricOrderByWithRelationInput, { nullable: true })
  metric?: MetricOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => HabitOrderByWithRelationInput, { nullable: true })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => MetricRecordOrderByRelationAggregateInput, { nullable: true })
  records?: MetricRecordOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
