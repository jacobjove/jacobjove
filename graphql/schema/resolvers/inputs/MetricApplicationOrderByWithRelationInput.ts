import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";
import { ActOrderByWithRelationInput } from "../inputs/ActOrderByWithRelationInput";
import { MetricOrderByWithRelationInput } from "../inputs/MetricOrderByWithRelationInput";

@TypeGraphQL.InputType("MetricApplicationOrderByWithRelationInput", {
  isAbstract: true,
})
export class MetricApplicationOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  actId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActOrderByWithRelationInput, {
    nullable: true,
  })
  act?: ActOrderByWithRelationInput | undefined;

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
