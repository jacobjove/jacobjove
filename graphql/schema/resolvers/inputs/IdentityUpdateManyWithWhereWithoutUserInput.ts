import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityScalarWhereInput } from "../inputs/IdentityScalarWhereInput";
import { IdentityUpdateManyMutationInput } from "../inputs/IdentityUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class IdentityUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => IdentityScalarWhereInput, { nullable: false })
  where!: IdentityScalarWhereInput;

  @TypeGraphQL.Field((_type) => IdentityUpdateManyMutationInput, { nullable: false })
  data!: IdentityUpdateManyMutationInput;
}
