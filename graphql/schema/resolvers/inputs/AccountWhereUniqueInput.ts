import * as TypeGraphQL from "type-graphql";
import { AccountProviderRemoteIdCompoundUniqueInput } from "../inputs/AccountProviderRemoteIdCompoundUniqueInput";

@TypeGraphQL.InputType("AccountWhereUniqueInput", {
  isAbstract: true,
})
export class AccountWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => AccountProviderRemoteIdCompoundUniqueInput, {
    nullable: true,
  })
  provider_remoteId?: AccountProviderRemoteIdCompoundUniqueInput | undefined;
}
