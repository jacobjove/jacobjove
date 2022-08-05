import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CalendarCreateNestedManyWithoutAccountInput } from "../inputs/CalendarCreateNestedManyWithoutAccountInput";

@TypeGraphQL.InputType("AccountCreateInput", { isAbstract: true })
export class AccountCreateInput {
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

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => CalendarCreateNestedManyWithoutAccountInput, { nullable: true })
  calendars?: CalendarCreateNestedManyWithoutAccountInput | undefined;
}
