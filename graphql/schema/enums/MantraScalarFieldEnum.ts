import * as TypeGraphQL from "type-graphql";

export enum MantraScalarFieldEnum {
  id = "id",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(MantraScalarFieldEnum, {
  name: "MantraScalarFieldEnum",
  description: undefined,
});
