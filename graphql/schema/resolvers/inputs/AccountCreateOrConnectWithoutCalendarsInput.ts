import * as TypeGraphQL from "type-graphql";
import { AccountCreateWithoutCalendarsInput } from "../inputs/AccountCreateWithoutCalendarsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutCalendarsInput", {
  isAbstract: true,
})
export class AccountCreateOrConnectWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AccountCreateWithoutCalendarsInput, {
    nullable: false,
  })
  create!: AccountCreateWithoutCalendarsInput;
}
