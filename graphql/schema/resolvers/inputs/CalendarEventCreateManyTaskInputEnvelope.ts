import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyTaskInput } from "../inputs/CalendarEventCreateManyTaskInput";

@TypeGraphQL.InputType("CalendarEventCreateManyTaskInputEnvelope", {
  isAbstract: true,
})
export class CalendarEventCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(() => [CalendarEventCreateManyTaskInput], { nullable: false })
  data!: CalendarEventCreateManyTaskInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
