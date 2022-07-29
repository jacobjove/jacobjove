import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateInput } from "../../../inputs/CalendarEventUpdateInput";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventUpdateInput, { nullable: false })
  data!: CalendarEventUpdateInput;

  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;
}
