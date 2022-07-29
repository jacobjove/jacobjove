import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateInput } from "../../../inputs/CalendarEventUpdateInput";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCalendarEventArgs {
  @TypeGraphQL.Field(() => CalendarEventUpdateInput, { nullable: false })
  data!: CalendarEventUpdateInput;

  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;
}
