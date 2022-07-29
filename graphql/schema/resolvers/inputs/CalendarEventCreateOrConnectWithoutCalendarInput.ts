import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventCreateOrConnectWithoutCalendarInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutCalendarInput, { nullable: false })
  create!: CalendarEventCreateWithoutCalendarInput;
}
