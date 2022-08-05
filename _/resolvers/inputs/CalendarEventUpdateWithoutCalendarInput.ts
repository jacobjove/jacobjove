import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CalendarEventUpdateWithoutCalendarInput", { isAbstract: true })
export class CalendarEventUpdateWithoutCalendarInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  start?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  end?: Date | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
