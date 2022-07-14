import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationCreateInput } from "../inputs/IdentityActRelationCreateInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationCreateOrConnectWithoutIdentityInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateOrConnectWithoutIdentityInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationCreateInput, {
    nullable: false,
  })
  create!: IdentityActRelationCreateInput;
}
