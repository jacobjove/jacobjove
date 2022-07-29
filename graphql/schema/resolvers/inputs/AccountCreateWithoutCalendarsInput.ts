import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";

@TypeGraphQL.InputType("AccountCreateWithoutCalendarsInput", {
  isAbstract: true,
})
export class AccountCreateWithoutCalendarsInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accessToken?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  scopes?: string[] | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutAccountsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutAccountsInput;
}
