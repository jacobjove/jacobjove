import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarEventSumAggregate", {
  isAbstract: true,
})
export class CalendarEventSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  calendarId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  taskId!: string | null;
}
