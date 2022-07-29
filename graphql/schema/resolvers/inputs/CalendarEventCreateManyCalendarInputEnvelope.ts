import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyCalendarInput } from "../inputs/CalendarEventCreateManyCalendarInput";

@TypeGraphQL.InputType("CalendarEventCreateManyCalendarInputEnvelope", {
  isAbstract: true,
})
export class CalendarEventCreateManyCalendarInputEnvelope {
  @TypeGraphQL.Field(() => [CalendarEventCreateManyCalendarInput], { nullable: false })
  data!: CalendarEventCreateManyCalendarInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
