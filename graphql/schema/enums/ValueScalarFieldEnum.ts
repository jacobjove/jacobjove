import * as TypeGraphQL from "type-graphql-v2-fork";

export enum ValueScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(ValueScalarFieldEnum, {
  name: "ValueScalarFieldEnum",
  description: undefined,
});
