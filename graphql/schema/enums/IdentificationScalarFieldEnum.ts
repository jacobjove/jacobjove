import * as TypeGraphQL from "type-graphql-v2-fork";

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
