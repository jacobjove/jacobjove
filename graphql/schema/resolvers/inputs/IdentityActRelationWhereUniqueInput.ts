import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationIdentityIdActionIdCompoundUniqueInput } from "../inputs/IdentityActRelationIdentityIdActionIdCompoundUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationWhereUniqueInput", {
  isAbstract: true,
})
export class IdentityActRelationWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationIdentityIdActionIdCompoundUniqueInput, {
    nullable: true,
  })
  identityId_actionId?: IdentityActRelationIdentityIdActionIdCompoundUniqueInput | undefined;
}
