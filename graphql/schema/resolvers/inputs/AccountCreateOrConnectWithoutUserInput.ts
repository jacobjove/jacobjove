import * as TypeGraphQL from "type-graphql";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class AccountCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AccountCreateWithoutUserInput, {
    nullable: false,
  })
  create!: AccountCreateWithoutUserInput;
}
