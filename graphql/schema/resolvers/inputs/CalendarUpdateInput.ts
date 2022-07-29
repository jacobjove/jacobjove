import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateOneWithoutCalendarsInput } from "../inputs/AccountUpdateOneWithoutCalendarsInput";
import { CalendarEventUpdateManyWithoutCalendarInput } from "../inputs/CalendarEventUpdateManyWithoutCalendarInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableEnumCalendarProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumCalendarProviderFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCalendarsInput } from "../inputs/UserUpdateOneRequiredWithoutCalendarsInput";

@TypeGraphQL.InputType("CalendarUpdateInput", {
  isAbstract: true,
})
export class CalendarUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  color?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableEnumCalendarProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: NullableEnumCalendarProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  syncToken?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  primary?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  public?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  enabled?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutCalendarsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateOneWithoutCalendarsInput, { nullable: true })
  account?: AccountUpdateOneWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutCalendarInput, { nullable: true })
  events?: CalendarEventUpdateManyWithoutCalendarInput | undefined;
}
