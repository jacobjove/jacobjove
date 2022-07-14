import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { AccountCreatescopesInput } from "../inputs/AccountCreatescopesInput";
import { CalendarCreateNestedManyWithoutAccountInput } from "../inputs/CalendarCreateNestedManyWithoutAccountInput";
import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";

@TypeGraphQL.InputType("AccountCreateInput", {
  isAbstract: true,
})
export class AccountCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  accessToken?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  accessTokenExpiry?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  syncToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => AccountCreatescopesInput, {
    nullable: true,
  })
  scopes?: AccountCreatescopesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutAccountsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutAccountsInput;

  @TypeGraphQL.Field((_type) => CalendarCreateNestedManyWithoutAccountInput, {
    nullable: true,
  })
  calendars?: CalendarCreateNestedManyWithoutAccountInput | undefined;
}
