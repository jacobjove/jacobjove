import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityUpdateManyMutationInput", { isAbstract: true })
export class IdentityUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;
}
