import * as TypeGraphQL from "type-graphql";

export enum MetricScalarFieldEnum {
  id = "id",
  name = "name",
}
TypeGraphQL.registerEnumType(MetricScalarFieldEnum, {
  name: "MetricScalarFieldEnum",
  description: undefined,
});
