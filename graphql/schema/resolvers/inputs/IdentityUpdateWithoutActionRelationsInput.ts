import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityUpdateManyMutationInput } from "../inputs/IdentityUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityUpdateWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityUpdateWithoutActionRelationsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateManyMutationInput, { nullable: true })
  identities?: IdentityUpdateManyMutationInput | undefined;
}
