import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ActScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
  isPublic = "isPublic",
  parentId = "parentId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ActScalarFieldEnum, {
  name: "ActScalarFieldEnum",
  description: undefined,
});
