import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  uid = "uid",
  name = "name",
  email = "email",
  emailVerified = "emailVerified",
  image = "image",
  isAdmin = "isAdmin",
  settings = "settings",
  lastLogin = "lastLogin",
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
