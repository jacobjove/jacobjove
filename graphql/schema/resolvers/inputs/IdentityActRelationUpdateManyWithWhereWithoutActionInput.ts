import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationScalarWhereInput } from "../inputs/IdentityActRelationScalarWhereInput";
import { IdentityActRelationUpdateManyMutationInput } from "../inputs/IdentityActRelationUpdateManyMutationInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateManyWithWhereWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateManyWithWhereWithoutActionInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationScalarWhereInput, {
    nullable: false,
  })
  where!: IdentityActRelationScalarWhereInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: IdentityActRelationUpdateManyMutationInput;
}
