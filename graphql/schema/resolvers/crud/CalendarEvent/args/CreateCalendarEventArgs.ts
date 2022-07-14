import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateInput } from "../../../inputs/CalendarEventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventCreateInput, {
    nullable: false,
  })
  data!: CalendarEventCreateInput;
}
