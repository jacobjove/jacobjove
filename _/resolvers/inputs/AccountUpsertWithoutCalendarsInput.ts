import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateWithoutCalendarsInput } from "../inputs/AccountCreateWithoutCalendarsInput";
import { AccountUpdateWithoutCalendarsInput } from "../inputs/AccountUpdateWithoutCalendarsInput";

@TypeGraphQL.InputType("AccountUpsertWithoutCalendarsInput", { isAbstract: true })
export class AccountUpsertWithoutCalendarsInput {
  @TypeGraphQL.Field(() => AccountUpdateWithoutCalendarsInput, { nullable: false })
  update!: AccountUpdateWithoutCalendarsInput;

  @TypeGraphQL.Field(() => AccountCreateWithoutCalendarsInput, { nullable: false })
  create!: AccountCreateWithoutCalendarsInput;
}
