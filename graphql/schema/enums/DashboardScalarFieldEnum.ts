import * as TypeGraphQL from "type-graphql-v2-fork";

export enum DashboardScalarFieldEnum {
  id = "id",
  name = "name",
  userId = "userId",
  layouts = "layouts",
  isDefault = "isDefault",
  public = "public",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(DashboardScalarFieldEnum, {
  name: "DashboardScalarFieldEnum",
  description: undefined,
});
