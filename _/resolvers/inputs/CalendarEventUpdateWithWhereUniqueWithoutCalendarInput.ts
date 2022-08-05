import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateWithoutCalendarInput } from "../inputs/CalendarEventUpdateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithWhereUniqueWithoutCalendarInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutCalendarInput, { nullable: false })
  data!: CalendarEventUpdateWithoutCalendarInput;
}
