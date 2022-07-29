import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateManyMutationInput } from "../inputs/IdentityActRelationUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityUpdateWithoutIdentitiesInput", {
  isAbstract: true,
})
export class IdentityUpdateWithoutIdentitiesInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateManyMutationInput, { nullable: true })
  actionRelations?: IdentityActRelationUpdateManyMutationInput | undefined;
}
