import * as TypeGraphQL from "type-graphql";

export enum MetricUsageScalarFieldEnum {
  id = "id",
  metricId = "metricId",
  habitId = "habitId",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(MetricUsageScalarFieldEnum, {
  name: "MetricUsageScalarFieldEnum",
  description: undefined,
});
