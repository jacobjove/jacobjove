import * as TypeGraphQL from "type-graphql";

export enum ValueScalarFieldEnum {
  id = "id",
  userId = "userId",
  valueId = "valueId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ValueScalarFieldEnum, {
  name: "ValueScalarFieldEnum",
  description: undefined,
});
