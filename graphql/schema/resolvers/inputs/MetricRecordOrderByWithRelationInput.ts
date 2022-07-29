import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionOrderByWithRelationInput } from "../inputs/ActionOrderByWithRelationInput";
import { MetricUsageOrderByWithRelationInput } from "../inputs/MetricUsageOrderByWithRelationInput";

@TypeGraphQL.InputType("MetricRecordOrderByWithRelationInput", {
  isAbstract: true,
})
export class MetricRecordOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  metricUsageId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageOrderByWithRelationInput, { nullable: true })
  metricUsage?: MetricUsageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActionOrderByWithRelationInput, { nullable: true })
  action?: ActionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
