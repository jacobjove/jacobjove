import * as TypeGraphQL from "type-graphql";
import { CalendarEventUpdateWithoutCalendarInput } from "../inputs/CalendarEventUpdateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithWhereUniqueWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutCalendarInput, {
    nullable: false,
  })
  data!: CalendarEventUpdateWithoutCalendarInput;
}
