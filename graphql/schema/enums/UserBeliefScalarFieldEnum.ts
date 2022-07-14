import * as TypeGraphQL from "type-graphql";

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
