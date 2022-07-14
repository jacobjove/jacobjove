import * as TypeGraphQL from "type-graphql";

export enum CategorizationScalarFieldEnum {
  id = "id",
  categoryId = "categoryId",
  actId = "actId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(CategorizationScalarFieldEnum, {
  name: "CategorizationScalarFieldEnum",
  description: undefined,
});
