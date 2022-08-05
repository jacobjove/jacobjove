import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateOrConnectWithoutCalendarsInput } from "../inputs/AccountCreateOrConnectWithoutCalendarsInput";
import { AccountCreateWithoutCalendarsInput } from "../inputs/AccountCreateWithoutCalendarsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutCalendarsInput", { isAbstract: true })
export class AccountCreateNestedOneWithoutCalendarsInput {
  @TypeGraphQL.Field(() => AccountCreateWithoutCalendarsInput, { nullable: true })
  create?: AccountCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => AccountCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: AccountCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: true })
  connect?: AccountWhereUniqueInput | undefined;
}
