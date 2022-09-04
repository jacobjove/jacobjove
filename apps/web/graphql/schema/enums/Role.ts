import * as TypeGraphQL from "type-graphql-v2-fork";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
