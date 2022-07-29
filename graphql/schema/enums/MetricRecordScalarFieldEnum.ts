import * as TypeGraphQL from "type-graphql-v2-fork";

export enum MetricRecordScalarFieldEnum {
  id = "id",
  metricUsageId = "metricUsageId",
  actionId = "actionId",
  value = "value",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(MetricRecordScalarFieldEnum, {
  name: "MetricRecordScalarFieldEnum",
  description: undefined,
});
