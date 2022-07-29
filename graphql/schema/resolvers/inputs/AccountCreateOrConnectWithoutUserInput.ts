import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class AccountCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountCreateWithoutUserInput, { nullable: false })
  create!: AccountCreateWithoutUserInput;
}
