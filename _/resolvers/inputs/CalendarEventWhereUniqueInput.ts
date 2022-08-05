import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventRemoteIdCalendarIdCompoundUniqueInput } from "../inputs/CalendarEventRemoteIdCalendarIdCompoundUniqueInput";

@TypeGraphQL.InputType("CalendarEventWhereUniqueInput", { isAbstract: true })
export class CalendarEventWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => CalendarEventRemoteIdCalendarIdCompoundUniqueInput, {
    nullable: true,
  })
  remoteId_calendarId?: CalendarEventRemoteIdCalendarIdCompoundUniqueInput | undefined;
}
