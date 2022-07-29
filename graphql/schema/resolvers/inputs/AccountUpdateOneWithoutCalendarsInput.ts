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
  @TypeGraphQL.Field(() => AccountCreateWithoutCalendarsInput, { nullable: true })
  create?: AccountCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => AccountCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: AccountCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => AccountUpsertWithoutCalendarsInput, { nullable: true })
  upsert?: AccountUpsertWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: true })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => AccountUpdateWithoutCalendarsInput, { nullable: true })
  update?: AccountUpdateWithoutCalendarsInput | undefined;
}
