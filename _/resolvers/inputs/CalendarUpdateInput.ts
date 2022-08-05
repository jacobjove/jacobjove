import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateOneWithoutCalendarsInput } from "../inputs/AccountUpdateOneWithoutCalendarsInput";
import { CalendarEventUpdateManyWithoutCalendarInput } from "../inputs/CalendarEventUpdateManyWithoutCalendarInput";
import { NullableEnumCalendarProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumCalendarProviderFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CalendarUpdateInput", { isAbstract: true })
export class CalendarUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  color?: string | null | undefined;

  @TypeGraphQL.Field(() => NullableEnumCalendarProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: NullableEnumCalendarProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  syncToken?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  primary?: boolean | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  enabled?: boolean | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => AccountUpdateOneWithoutCalendarsInput, { nullable: true })
  account?: AccountUpdateOneWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutCalendarInput, { nullable: true })
  events?: CalendarEventUpdateManyWithoutCalendarInput | undefined;
}
