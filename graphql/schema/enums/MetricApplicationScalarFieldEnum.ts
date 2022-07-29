import * as TypeGraphQL from "type-graphql-v2-fork";

export enum MetricApplicationScalarFieldEnum {
  id = "id",
  actId = "actId",
  metricId = "metricId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(MetricApplicationScalarFieldEnum, {
  name: "MetricApplicationScalarFieldEnum",
  description: undefined,
});
