import * as TypeGraphQL from "type-graphql-v2-fork";
import { SortOrder } from "../../enums/SortOrder";
import { ActionOrderByWithRelationInput } from "../inputs/ActionOrderByWithRelationInput";
import { MetricUsageOrderByWithRelationInput } from "../inputs/MetricUsageOrderByWithRelationInput";

@TypeGraphQL.InputType("MetricRecordOrderByWithRelationInput", { isAbstract: true })
export class MetricRecordOrderByWithRelationInput {
  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  metricUsageId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => MetricUsageOrderByWithRelationInput, { nullable: true })
  metricUsage?: MetricUsageOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  actionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => ActionOrderByWithRelationInput, { nullable: true })
  action?: ActionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(() => SortOrder, { nullable: true })
  archivedAt?: "asc" | "desc" | undefined;
}
