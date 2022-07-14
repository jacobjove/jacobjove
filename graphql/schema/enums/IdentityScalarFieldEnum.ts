import * as TypeGraphQL from "type-graphql";

export enum IdentityScalarFieldEnum {
  id = "id",
  name = "name",
  slug = "slug",
  description = "description",
}
TypeGraphQL.registerEnumType(IdentityScalarFieldEnum, {
  name: "IdentityScalarFieldEnum",
  description: undefined,
});
