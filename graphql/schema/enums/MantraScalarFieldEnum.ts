import * as TypeGraphQL from "type-graphql-v2-fork";

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
