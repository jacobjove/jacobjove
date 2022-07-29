import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateInput } from "../inputs/IdentityActRelationUpdateInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateWithWhereUniqueWithoutIdentityInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateInput, { nullable: false })
  data!: IdentityActRelationUpdateInput;
}
