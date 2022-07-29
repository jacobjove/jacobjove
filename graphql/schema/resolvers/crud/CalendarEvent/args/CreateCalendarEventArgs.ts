import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateInput } from "../../../inputs/CalendarEventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCalendarEventArgs {
  @TypeGraphQL.Field(() => CalendarEventCreateInput, { nullable: false })
  data!: CalendarEventCreateInput;
}
