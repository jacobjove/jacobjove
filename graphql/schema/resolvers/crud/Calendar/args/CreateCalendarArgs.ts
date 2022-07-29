import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCalendarArgs {
  @TypeGraphQL.Field(() => CalendarCreateInput, { nullable: false })
  data!: CalendarCreateInput;
}
