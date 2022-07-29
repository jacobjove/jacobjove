import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountProviderRemoteIdCompoundUniqueInput } from "../inputs/AccountProviderRemoteIdCompoundUniqueInput";

@TypeGraphQL.InputType("AccountWhereUniqueInput", {
  isAbstract: true,
})
export class AccountWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => AccountProviderRemoteIdCompoundUniqueInput, { nullable: true })
  provider_remoteId?: AccountProviderRemoteIdCompoundUniqueInput | undefined;
}
