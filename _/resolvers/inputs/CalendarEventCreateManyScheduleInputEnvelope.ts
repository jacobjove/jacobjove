import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyScheduleInput } from "../inputs/CalendarEventCreateManyScheduleInput";

@TypeGraphQL.InputType("CalendarEventCreateManyScheduleInputEnvelope", { isAbstract: true })
export class CalendarEventCreateManyScheduleInputEnvelope {
  @TypeGraphQL.Field(() => [CalendarEventCreateManyScheduleInput], { nullable: false })
  data!: CalendarEventCreateManyScheduleInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
