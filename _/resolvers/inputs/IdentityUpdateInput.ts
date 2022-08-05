import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateManyMutationInput } from "../inputs/IdentityActRelationUpdateManyMutationInput";
import { IdentityUpdateManyMutationInput } from "../inputs/IdentityUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityUpdateInput", { isAbstract: true })
export class IdentityUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => IdentityUpdateManyMutationInput, { nullable: true })
  identities?: IdentityUpdateManyMutationInput | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateManyMutationInput, { nullable: true })
  actionRelations?: IdentityActRelationUpdateManyMutationInput | undefined;
}
