import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventCreateOrConnectWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutCalendarInput, { nullable: false })
  create!: CalendarEventCreateWithoutCalendarInput;
}
