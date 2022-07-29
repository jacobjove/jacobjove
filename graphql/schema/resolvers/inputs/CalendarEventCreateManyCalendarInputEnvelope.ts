import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyCalendarInput } from "../inputs/CalendarEventCreateManyCalendarInput";

@TypeGraphQL.InputType("CalendarEventCreateManyCalendarInputEnvelope", {
  isAbstract: true,
})
export class CalendarEventCreateManyCalendarInputEnvelope {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateManyCalendarInput], { nullable: false })
  data!: CalendarEventCreateManyCalendarInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
