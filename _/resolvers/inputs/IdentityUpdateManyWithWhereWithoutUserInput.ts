import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityScalarWhereInput } from "../inputs/IdentityScalarWhereInput";
import { IdentityUpdateManyMutationInput } from "../inputs/IdentityUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityUpdateManyWithWhereWithoutUserInput", { isAbstract: true })
export class IdentityUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => IdentityScalarWhereInput, { nullable: false })
  where!: IdentityScalarWhereInput;

  @TypeGraphQL.Field(() => IdentityUpdateManyMutationInput, { nullable: false })
  data!: IdentityUpdateManyMutationInput;
}
