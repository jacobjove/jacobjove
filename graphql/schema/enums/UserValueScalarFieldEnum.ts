import * as TypeGraphQL from "type-graphql-v2-fork";

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
