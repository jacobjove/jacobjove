import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { MetricOrderByWithRelationInput } from "../inputs/MetricOrderByWithRelationInput";
import { MetricRecordOrderByRelationAggregateInput } from "../inputs/MetricRecordOrderByRelationAggregateInput";

@TypeGraphQL.InputType("MetricUsageOrderByWithRelationInput", {
  isAbstract: true,
})
export class MetricUsageOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  metricId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricOrderByWithRelationInput, {
    nullable: true,
  })
  metric?: MetricOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  habitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => HabitOrderByWithRelationInput, {
    nullable: true,
  })
  habit?: HabitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordOrderByRelationAggregateInput, {
    nullable: true,
  })
  records?: MetricRecordOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;
}
