import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventScalarFieldEnum } from "../../../../enums/CalendarEventScalarFieldEnum";
import { CalendarEventOrderByWithRelationInput } from "../../../inputs/CalendarEventOrderByWithRelationInput";
import { CalendarEventWhereInput } from "../../../inputs/CalendarEventWhereInput";
import { CalendarEventWhereUniqueInput } from "../../../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyCalendarEventArgs {
  @TypeGraphQL.Field(() => CalendarEventWhereInput, { nullable: true })
  where?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field(() => [CalendarEventOrderByWithRelationInput], { nullable: true })
  orderBy?: CalendarEventOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: true })
  cursor?: CalendarEventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [CalendarEventScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "uid"
        | "remoteId"
        | "calendarId"
        | "scheduleId"
        | "habitId"
        | "taskId"
        | "title"
        | "start"
        | "end"
        | "allDay"
        | "notes"
        | "canceled"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
