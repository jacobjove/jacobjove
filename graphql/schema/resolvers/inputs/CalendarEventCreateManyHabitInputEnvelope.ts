import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyHabitInput } from "../inputs/CalendarEventCreateManyHabitInput";

@TypeGraphQL.InputType("CalendarEventCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class CalendarEventCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [CalendarEventCreateManyHabitInput], { nullable: false })
  data!: CalendarEventCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
