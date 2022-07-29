import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";

@TypeGraphQL.InputType("NullableEnumCalendarProviderFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableEnumCalendarProviderFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  set?: "google" | "apple" | undefined;
}
