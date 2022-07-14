import * as TypeGraphQL from "type-graphql";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarEventWhereUniqueInput;
}
