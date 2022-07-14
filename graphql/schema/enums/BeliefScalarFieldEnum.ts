import * as TypeGraphQL from "type-graphql";

export enum BeliefScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BeliefScalarFieldEnum, {
  name: "BeliefScalarFieldEnum",
  description: undefined,
});
