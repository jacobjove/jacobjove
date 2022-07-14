import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { HabitOrderByWithRelationInput } from "../inputs/HabitOrderByWithRelationInput";
import { MetricRecordOrderByRelationAggregateInput } from "../inputs/MetricRecordOrderByRelationAggregateInput";

@TypeGraphQL.InputType("ActionOrderByWithRelationInput", {
  isAbstract: true,
})
export class ActionOrderByWithRelationInput {
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
  start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  end?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordOrderByRelationAggregateInput, {
    nullable: true,
  })
  metricRecords?: MetricRecordOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  archivedAt?: "asc" | "desc" | undefined;
}
