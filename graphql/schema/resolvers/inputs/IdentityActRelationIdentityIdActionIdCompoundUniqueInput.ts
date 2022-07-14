import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("IdentityActRelationIdentityIdActionIdCompoundUniqueInput", {
  isAbstract: true,
})
export class IdentityActRelationIdentityIdActionIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  identityId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actionId!: string;
}
