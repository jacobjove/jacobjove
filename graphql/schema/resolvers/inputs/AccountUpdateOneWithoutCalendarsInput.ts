import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateOrConnectWithoutCalendarsInput } from "../inputs/AccountCreateOrConnectWithoutCalendarsInput";
import { AccountCreateWithoutCalendarsInput } from "../inputs/AccountCreateWithoutCalendarsInput";
import { AccountUpdateWithoutCalendarsInput } from "../inputs/AccountUpdateWithoutCalendarsInput";
import { AccountUpsertWithoutCalendarsInput } from "../inputs/AccountUpsertWithoutCalendarsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneWithoutCalendarsInput", {
  isAbstract: true,
})
export class AccountUpdateOneWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => AccountCreateWithoutCalendarsInput, { nullable: true })
  create?: AccountCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => AccountCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: AccountCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpsertWithoutCalendarsInput, { nullable: true })
  upsert?: AccountUpsertWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, { nullable: true })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateWithoutCalendarsInput, { nullable: true })
  update?: AccountUpdateWithoutCalendarsInput | undefined;
}
