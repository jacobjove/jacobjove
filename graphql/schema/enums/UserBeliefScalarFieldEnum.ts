import * as TypeGraphQL from "type-graphql-v2-fork";

export enum BeliefScalarFieldEnum {
  id = "id",
  userId = "userId",
  beliefId = "beliefId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(BeliefScalarFieldEnum, {
  name: "BeliefScalarFieldEnum",
  description: undefined,
});
