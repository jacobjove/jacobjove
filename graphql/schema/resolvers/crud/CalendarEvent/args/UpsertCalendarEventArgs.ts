import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateInput } from "../../../inputs/CalendarEventCreateInput";
import { CalendarEventUpdateInput } from "../../../inputs/CalendarEventUpdateInput";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCalendarEventArgs {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventCreateInput, { nullable: false })
  create!: CalendarEventCreateInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateInput, { nullable: false })
  update!: CalendarEventUpdateInput;
}
