import * as TypeGraphQL from "type-graphql";

export enum AccountScalarFieldEnum {
  id = "id",
  userId = "userId",
  provider = "provider",
  remoteId = "remoteId",
  scopes = "scopes",
  accessToken = "accessToken",
  refreshToken = "refreshToken",
  accessTokenExpiry = "accessTokenExpiry",
  syncToken = "syncToken",
  createdAt = "createdAt",
}
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: "AccountScalarFieldEnum",
  description: undefined,
});
