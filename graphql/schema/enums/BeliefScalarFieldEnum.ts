import * as TypeGraphQL from "type-graphql-v2-fork";

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
