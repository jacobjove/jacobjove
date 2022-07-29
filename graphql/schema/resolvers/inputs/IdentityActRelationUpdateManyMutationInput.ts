import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyMutationInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
