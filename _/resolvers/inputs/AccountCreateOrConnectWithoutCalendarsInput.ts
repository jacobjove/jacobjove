import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateWithoutCalendarsInput } from "../inputs/AccountCreateWithoutCalendarsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutCalendarsInput", { isAbstract: true })
export class AccountCreateOrConnectWithoutCalendarsInput {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountCreateWithoutCalendarsInput, { nullable: false })
  create!: AccountCreateWithoutCalendarsInput;
}
