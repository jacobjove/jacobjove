import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CalendarEventRemoteIdCalendarIdCompoundUniqueInput", { isAbstract: true })
export class CalendarEventRemoteIdCalendarIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  calendarId!: string;
}
