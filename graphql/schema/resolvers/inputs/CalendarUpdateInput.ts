import * as TypeGraphQL from "type-graphql";
import { AccountUpdateOneWithoutCalendarsInput } from "../inputs/AccountUpdateOneWithoutCalendarsInput";
import { CalendarEventUpdateManyWithoutCalendarInput } from "../inputs/CalendarEventUpdateManyWithoutCalendarInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumCalendarProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumCalendarProviderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCalendarsInput } from "../inputs/UserUpdateOneRequiredWithoutCalendarsInput";

@TypeGraphQL.InputType("CalendarUpdateInput", {
  isAbstract: true,
})
export class CalendarUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  uid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  color?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableEnumCalendarProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: NullableEnumCalendarProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  remoteId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  syncToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  primary?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  public?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  enabled?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutCalendarsInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateOneWithoutCalendarsInput, {
    nullable: true,
  })
  account?: AccountUpdateOneWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutCalendarInput, {
    nullable: true,
  })
  events?: CalendarEventUpdateManyWithoutCalendarInput | undefined;
}
