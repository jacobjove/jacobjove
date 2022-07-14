import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("CalendarEventRemoteIdCalendarIdCompoundUniqueInput", {
  isAbstract: true,
})
export class CalendarEventRemoteIdCalendarIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  calendarId!: string;
}
