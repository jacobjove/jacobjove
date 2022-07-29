import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CalendarCreateNestedManyWithoutAccountInput } from "../inputs/CalendarCreateNestedManyWithoutAccountInput";

@TypeGraphQL.InputType("AccountCreateWithoutUserInput", {
  isAbstract: true,
})
export class AccountCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  accessToken?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  syncToken?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => [String], { nullable: true })
  scopes?: string[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateNestedManyWithoutAccountInput, { nullable: true })
  calendars?: CalendarCreateNestedManyWithoutAccountInput | undefined;
}
