import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CategorizationUpdateManyMutationInput", { isAbstract: true })
export class CategorizationUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
