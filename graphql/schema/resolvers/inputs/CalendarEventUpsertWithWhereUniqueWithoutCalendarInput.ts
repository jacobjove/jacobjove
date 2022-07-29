import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventUpdateWithoutCalendarInput } from "../inputs/CalendarEventUpdateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutCalendarInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutCalendarInput, { nullable: false })
  update!: CalendarEventUpdateWithoutCalendarInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutCalendarInput, { nullable: false })
  create!: CalendarEventCreateWithoutCalendarInput;
}
