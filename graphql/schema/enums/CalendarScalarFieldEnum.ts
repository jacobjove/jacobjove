import * as TypeGraphQL from "type-graphql-v2-fork";

export enum CalendarScalarFieldEnum {
  id = "id",
  uid = "uid",
  userId = "userId",
  name = "name",
  color = "color",
  provider = "provider",
  remoteId = "remoteId",
  syncToken = "syncToken",
  accountId = "accountId",
  primary = "primary",
  "public" = "public",
  enabled = "enabled",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(CalendarScalarFieldEnum, {
  name: "CalendarScalarFieldEnum",
  description: undefined,
});
