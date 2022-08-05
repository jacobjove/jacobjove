import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AccountProviderRemoteIdCompoundUniqueInput", { isAbstract: true })
export class AccountProviderRemoteIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;
}
