import * as TypeGraphQL from "type-graphql";

export enum IdentityScalarFieldEnum {
  id = "id",
  userId = "userId",
  identityId = "identityId",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(IdentityScalarFieldEnum, {
  name: "IdentityScalarFieldEnum",
  description: undefined,
});
