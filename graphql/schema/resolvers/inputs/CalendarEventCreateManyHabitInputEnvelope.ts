import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyHabitInput } from "../inputs/CalendarEventCreateManyHabitInput";

@TypeGraphQL.InputType("CalendarEventCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class CalendarEventCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateManyHabitInput], {
    nullable: false,
  })
  data!: CalendarEventCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
