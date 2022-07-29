import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationScalarWhereInput } from "../inputs/IdentityActRelationScalarWhereInput";
import { IdentityActRelationUpdateManyMutationInput } from "../inputs/IdentityActRelationUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyWithWhereWithoutIdentityInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateManyWithWhereWithoutIdentityInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationScalarWhereInput, { nullable: false })
  where!: IdentityActRelationScalarWhereInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyMutationInput, { nullable: false })
  data!: IdentityActRelationUpdateManyMutationInput;
}
