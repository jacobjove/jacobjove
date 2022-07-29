import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityActRelationIdentityIdActionIdCompoundUniqueInput", {
  isAbstract: true,
})
export class IdentityActRelationIdentityIdActionIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  identityId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actionId!: string;
}
