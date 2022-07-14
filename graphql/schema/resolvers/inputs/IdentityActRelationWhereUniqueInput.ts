import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationIdentityIdActionIdCompoundUniqueInput } from "../inputs/IdentityActRelationIdentityIdActionIdCompoundUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationWhereUniqueInput", {
  isAbstract: true,
})
export class IdentityActRelationWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationIdentityIdActionIdCompoundUniqueInput, {
    nullable: true,
  })
  identityId_actionId?: IdentityActRelationIdentityIdActionIdCompoundUniqueInput | undefined;
}
